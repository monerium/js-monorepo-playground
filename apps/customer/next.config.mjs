/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    // https://dev.to/dinhkhai0201/module-not-found-cant-resolve-pino-pretty-g6
    config.externals.push('pino-pretty', 'encoding');
    return config;
  },
};

export default nextConfig;
