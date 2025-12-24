/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    async rewrites() {
        return [
            {
                source: '/admin/:path*',
                destination: '/admin/:path*',
            },
        ];
    },
};

export default nextConfig;
