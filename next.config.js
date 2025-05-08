/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Desactivar ESLint durante el build (solo para producción)
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['coderlabs.co'],
    unoptimized: process.env.NODE_ENV !== 'production'
  },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
  }
}

module.exports = nextConfig
