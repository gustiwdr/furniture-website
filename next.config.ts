import type { NextConfig } from "next";

// Bundle analyzer untuk production analysis
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	poweredByHeader: false,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				pathname: "/**",
			},
		],
		minimumCacheTTL: 300,
		formats: ["image/webp", "image/avif"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},
	transpilePackages: [],
	experimental: {
		optimizePackageImports: ["react-icons"],
	},
	webpack: (config: any, { dev, isServer }: any) => {
		// SVG optimization
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		// Bundle analyzer untuk production
		if (!dev && !isServer) {
			config.optimization.splitChunks = {
				chunks: "all",
				cacheGroups: {
					default: false,
					vendors: false,
					// Vendor chunk
					vendor: {
						name: "vendor",
						chunks: "all",
						test: /node_modules/,
						priority: 20,
					},
					// Common chunk
					common: {
						name: "common",
						minChunks: 2,
						chunks: "all",
						priority: 10,
						reuseExistingChunk: true,
						enforce: true,
					},
				},
			};
		}

		return config;
	},
	async headers() {
		return [
			{
				source: "/:path*",
				headers: [
					{
						key: "X-DNS-Prefetch-Control",
						value: "on",
					},
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
				],
			},
			{
				source: "/images/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
		];
	},
};

export default withBundleAnalyzer(nextConfig);
