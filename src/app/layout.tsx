import type { Metadata } from "next";
import { Montserrat, Nunito, Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

const montserrat = Montserrat({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-montserrat",
	preload: true,
});

const nunito = Nunito({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-nunito",
	preload: false,
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-poppins",
	preload: false,
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
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${montserrat.variable} ${nunito.variable} ${poppins.variable} font-montserrat`}
			>
				<CartProvider>{children}</CartProvider>
			</body>
		</html>
	);
}
