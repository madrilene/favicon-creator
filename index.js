import fs from "node:fs";
import sharp from "sharp";
import { sharpsToIco } from "sharp-ico";
import { pathToSvgLogo, outputDir } from "./settings.js";

async function createFavicons() {
  // Ensure the output directory exists
  fs.mkdirSync(outputDir, { recursive: true });

  // Read the SVG logo
  const svgBuffer = fs.readFileSync(pathToSvgLogo);

  // Write the SVG favicon
  fs.writeFileSync(`${outputDir}/favicon.svg`, svgBuffer);

  // Create PNG favicons
  await sharp(svgBuffer).resize(192, 192).toFile(`${outputDir}/icon-192x192.png`);
  await sharp(svgBuffer).resize(512, 512).toFile(`${outputDir}/icon-512x512.png`);
  await sharp(svgBuffer).resize(180, 180).toFile(`${outputDir}/apple-touch-icon.png`);

  // Create a maskable icon
  await sharp(svgBuffer)
    .resize(512, 512)
    .extend({
      top: 50,
      bottom: 50,
      left: 50,
      right: 50,
      background: { r: 0, g: 0, b: 0, alpha: 0 }, // Transparent padding
    })
    .toFile(`${outputDir}/maskable-icon.png`);

  // Create an ICO file
  const iconSharp = sharp(svgBuffer).resize(32, 32);
  await sharpsToIco([iconSharp], `${outputDir}/favicon.ico`, { sizes: [32] });

  console.log("All favicons generated.");
}

createFavicons();
