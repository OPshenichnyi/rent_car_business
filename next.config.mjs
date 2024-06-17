import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: 'dist',

  // output: 'export',
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
