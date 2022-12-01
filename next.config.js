/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig


module.exports = {
  i18n:{
    locales:["en-US", "es", "fr-FR"],
    defaultLocale:"es",
    localeDetection:false,
  }
}