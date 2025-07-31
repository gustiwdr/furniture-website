import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

const montserrat = Montserrat({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-montserrat",
	preload: true,
	fallback: ["system-ui", "-apple-system", "sans-serif"],
});

export const metadata: Metadata = {
	title: "Furniture E-Commerce - Modern Home Furniture Collection",
	description:
		"Discover our extensive collection of modern furniture for your home. Shop living room, bedroom, dining room, and office furniture with fast shipping and great prices.",
	keywords:
		"furniture, home furniture, modern furniture, living room, bedroom, dining room, office furniture, home decor",
	authors: [{ name: "Furniture Store Team" }],
	creator: "Furniture E-Commerce",
	publisher: "Furniture E-Commerce",
	openGraph: {
		title: "Furniture E-Commerce - Modern Home Furniture Collection",
		description:
			"Discover our extensive collection of modern furniture for your home.",
		type: "website",
		locale: "en_US",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export const viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				{/* Critical resource hints */}
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
					crossOrigin="anonymous"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					rel="preconnect"
					href="https://images.unsplash.com"
					crossOrigin="anonymous"
				/>
				<link rel="dns-prefetch" href="https://images.unsplash.com" />

				{/* Inline critical CSS to prevent render blocking */}
				<style
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{
						__html: `
							/* Critical CSS inline */
							* { box-sizing: border-box; }
							body { margin: 0; padding: 0; background-color: #ffffff; color: #171717; overflow-x: hidden; font-family: 'Montserrat', system-ui, -apple-system, sans-serif; font-display: swap; }
							header { height: 64px !important; min-height: 64px !important; max-height: 64px !important; position: fixed; width: 100%; z-index: 50; background-color: #ffffff; }
							.hero-section { aspect-ratio: 16 / 9; height: clamp(400px, 60vh, 700px) !important; min-height: 400px !important; width: 100% !important; position: relative; overflow: hidden; }
							img { display: block; max-width: 100%; height: auto; font-size: 0; }
							.header-spacer { height: 64px !important; min-height: 64px !important; width: 100%; flex-shrink: 0; }
						`,
					}}
				/>

				{/* Preload critical images to prevent CLS */}
				<link
					rel="preload"
					as="image"
					href="/images/hero.png"
					type="image/png"
					imageSrcSet="/images/hero.png 1x"
					imageSizes="100vw"
				/>
				<link
					rel="preload"
					as="image"
					href="/images/inspiration.png"
					type="image/png"
				/>

				{/* Performance optimizations */}
				<meta name="theme-color" content="#054c73" />
				<meta name="color-scheme" content="light" />

				{/* Service Worker Registration */}
				<script
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{
						__html: `
							if ('serviceWorker' in navigator) {
								window.addEventListener('load', function() {
									navigator.serviceWorker.register('/sw.js');
								});
							}
						`,
					}}
				/>
			</head>
			<body className={`${montserrat.variable} font-montserrat antialiased`}>
				<CartProvider>{children}</CartProvider>
			</body>
		</html>
	);
}
