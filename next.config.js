/** @type {import('next').NextConfig} */
module.exports = {
  webpack5: false,
  reactStrictMode: true,
  env: {
    URL: process.env.URL || 'http://localhost:3000'
  },
}
