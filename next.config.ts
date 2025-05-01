import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // Enables static export
  images: {
    domains: ['localhost'], // For local development
    // ⚠️ Important: `next export` doesn't support Image Optimization API.
    // Use `unoptimized: true` or a third-party loader (like Cloudinary).
    unoptimized: true, // Disables default Image Optimization
  },
  // Optional: Set basePath if deploying to a subdirectory (e.g., GitHub Pages)
  // basePath: '/your-repo-name',
}

export default nextConfig