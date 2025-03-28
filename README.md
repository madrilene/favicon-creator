# Favicon Generator

A very simple utility to generate various sizes and formats of favicons from a single SVG source file. I use this to generate favicons for my projects. It follows the recommendations from the article on [evilmartians.com](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs).

## Installation

```bash
npm install
```

## Usage

Replace favicon.svg with your own SVG file (works also with rastered images!).

You can also configure your settings in `settings.js`:

```javascript
// settings.js
export const pathToSvgLogo = "./favicon.svg";
export const outputDir = "./favicons";
```

Then run the script:

```bash
node index.js
# or:
npm run build
```

The script will generate the following favicon files in the specified output directory:

- SVG favicon
- PNG icons (192x192, 512x512)
- Apple touch icon (180x180)
- Maskable icon (512x512 with padding)
- ICO file (32x32)
