import { resolve } from 'path';
import { readdirSync } from 'fs';
import { HtmlTagDescriptor } from 'vite';

const fontsDirectory = resolve(__dirname, '../assets/fonts');
const fontFiles = readdirSync(fontsDirectory).filter((file) => file.endsWith('.ttf'));

const injectFontsToHead : HtmlTagDescriptor[ ] = fontFiles.map((file) => ({
  tag: 'link',
  injectTo: 'head',
  attrs: {
    rel: 'preload',
    href: `../assets/fonts/${file}`,
    as: 'font',
    type: 'font/ttf',
    crossOrigin: 'anonymous',
  },
}));

export { injectFontsToHead };