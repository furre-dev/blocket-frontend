/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.blocketcdn.se',
        port: '', // Leave empty unless you need a specific port
        pathname: '/**' // Supports all paths under the hostname
      }
    ]
  }
}

export default nextConfig
