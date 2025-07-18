import { vitestConfig } from '@kurone-kito/vite-lib-config';
import solidPlugin from 'vite-plugin-solid';
import viteConfig from './vite.config.mjs';

export default vitestConfig({
  ...viteConfig,
  plugins: [
    solidPlugin({
      hot: false,
      solid: { generate: 'dom', hydratable: true },
      ssr: false,
    }),
  ],
  test: { environment: 'jsdom', include: ['src/**/*.spec.{ts,tsx,mts}'] },
});
