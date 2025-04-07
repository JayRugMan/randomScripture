# Random Scripture

A browser extension that generates a random chapter from the Book of Mormon, complete with a link to read it on [churchofjesuschrist.org](https://www.churchofjesuschrist.org/study/scriptures/bofm).

## Features

- Randomly selects one of the 239 chapters from the Book of Mormon, ensuring each chapter has an equal chance.
- Displays the book and chapter with a clickable link to the official online scriptures.
- Compatible with Chromium-based browsers (Chrome, Edge, Opera) and Firefox.

## How to Install

### Chromium-based Browsers (Chrome, Edge, etc.)

1. Open your browser’s extensions page: `chrome://extensions/`
2. Enable **Developer mode** (toggle in the top right).
3. Click **Load unpacked** and select this repository’s folder.

### Firefox

1. Open Firefox’s debugging page: `about:debugging#/runtime/this-firefox`
2. Click **Load Temporary Add-on...** and select this repository’s folder.
   - Note: This is a temporary install; it’ll unload when Firefox restarts. For permanent use, consider packaging it (see Mozilla’s docs).

### Testing It

- A new icon (a gold “S” on a blue background) should appear in your toolbar.
- Click the icon to open the popup.
- Click **Get Random Chapter** to generate a random Book of Mormon chapter and link.

## Files

- `manifest.json`: Defines the extension’s structure and metadata.
- `popup.html`: The popup’s layout and styling.
- `popup.js`: Logic for random chapter selection and display.
- `randomScripture-*.png`: Icon files (16x16, 48x48, 128x128).

## Development

- Built with Manifest V3 for modern browser compatibility.
- Styling uses a dark blue theme with gold accents, inspired by scripture motifs.
- Randomization ensures fair selection across all 239 chapters, avoiding bias toward single-chapter books.

## License

[MIT License](LICENSE) - feel free to use, modify, and share!
