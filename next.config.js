/** @type {import('next').NextConfig} */

module.exports = {
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
          hostname: 'img.freepik.com',
        },
      ],
      
    },
    compiler: {
      // Enables the styled-components SWC transform
      styledComponents: true
    }
  
}
