/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: 'aceternity.com' },
            { hostname: 'images.unsplash.com' },
        ],
        domains: [
            "api.microlink.io", // Microlink Image Preview
        ],
    },
};

export default nextConfig;