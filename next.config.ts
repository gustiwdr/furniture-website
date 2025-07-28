import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				pathname: "/**",
			},
		],
		minimumCacheTTL: 60,
		formats: ["image/webp", "image/avif"],
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},
	transpilePackages: [],
	experimental: {
		optimizePackageImports: ["react-icons"],
	},
};

export default nextConfig;
