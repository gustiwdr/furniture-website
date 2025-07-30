import type { NextConfig } from "next";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
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
		styledComponents: false,
	},
	transpilePackages: [],
	experimental: {
		optimizePackageImports: ["react-icons", "next", "react", "react-dom"],
		typedRoutes: false,
	},
	serverExternalPackages: [],
	webpack: (config: any, { dev, isServer }: any) => {
		// SVG optimization
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		if (!dev && !isServer) {
			config.optimization = {
				...config.optimization,
				splitChunks: {
					chunks: "all",
					minSize: 0,
					maxSize: 244000, // 244KB chunks
					cacheGroups: {
						default: false,
						vendors: false,
						// React and Next.js vendor chunk
						framework: {
							name: "framework",
							chunks: "all",
							test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
							priority: 40,
							enforce: true,
						},
						// Other vendor libraries
						vendor: {
							name: "vendor",
							chunks: "all",
							test: /[\\/]node_modules[\\/]/,
							priority: 30,
							minChunks: 1,
							enforce: true,
						},
						// Commons chunk
						common: {
							name: "common",
							chunks: "all",
							minChunks: 2,
							priority: 20,
							reuseExistingChunk: true,
							enforce: true,
						},
						// App specific chunks
						app: {
							name: "app",
							chunks: "all",
							test: /[\\/]src[\\/]/,
							priority: 10,
							minChunks: 1,
							enforce: true,
						},
					},
				},
				// Tree shaking optimization
				usedExports: true,
				sideEffects: false,
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
