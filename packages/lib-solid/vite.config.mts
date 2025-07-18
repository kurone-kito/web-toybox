import { viteConfig } from '@kurone-kito/vite-lib-config';
import solidPlugin from 'vite-plugin-solid';

export default viteConfig({
  build: { rollupOptions: { external: [/@solidjs\//, /^solid-js(?:\/.*)?$/] } },
  plugins: [
    solidPlugin({
      hot: false,
      solid: { generate: 'dom', hydratable: true },
      ssr: false,
    }),
  ],
});
