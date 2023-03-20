/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_FILE_SERVER: 'http://localhost:7005/'
  }
}

module.exports = nextConfig
