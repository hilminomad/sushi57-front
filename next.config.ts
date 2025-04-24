import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'], // For local development
    // If you have a production domain for Strapi, add it too:
    // domains: ['localhost', 'your-production-strapi-domain.com'],
  },
  // Other Next.js config options can go here
}

export default nextConfig