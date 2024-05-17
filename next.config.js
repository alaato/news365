
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */

const nextConfig  = {
    webpack: (config) => {
      config.resolve.fallback = {
        "mongodb-client-encryption": false ,
        "aws4": false
      };
      return config;
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
        {
          protocol: 'https',
          hostname: 'img.freepik.com',
        },
        {
          protocol: 'https',
          hostname: '"www.aljazeera.net"',
        },
        {
          protocol: 'http',
          hostname: 'res.cloudinary.com',
        },
      ],
      
    },
    compiler: {
      // Enables the styled-components SWC transform
      styledComponents: true
    }
  
}
module.exports = withBundleAnalyzer(nextConfig)