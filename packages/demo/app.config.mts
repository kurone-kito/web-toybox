import { defineConfig } from '@solidjs/start/config';
import tailwindcss from '@tailwindcss/vite';

/** The base URL. */
const baseURL = process.env?.['BASE_PATH'];

export default defineConfig({
  server: {
    prerender: { autoSubfolderIndex: false },
    preset: 'githubPages',
    ...(baseURL ? { baseURL } : {}),
  },
  // biome-ignore lint/suspicious/noExplicitAny: tailwindcss plugin type compatibility
  vite: { plugins: [tailwindcss() as any[]] },
});
