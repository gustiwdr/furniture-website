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
				<link
					rel="preconnect"
					href="https://images.unsplash.com"
					crossOrigin="anonymous"
				/>
				<link rel="dns-prefetch" href="https://images.unsplash.com" />
				<link rel="preload" as="style" href="/critical.css" />
				{/* Preload critical images to prevent CLS */}
				<link rel="preload" as="image" href="/images/hero.png" />
				<link rel="preload" as="image" href="/images/inspiration.png" />
				{/* Service Worker Registration - Required for PWA functionality */}
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
