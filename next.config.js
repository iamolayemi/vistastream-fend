/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['thesportsdb.com', 'www.thesportsdb.com', 'vistastreams.test', 'vistastreams.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}
