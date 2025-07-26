import type { Metadata } from "next";
import { Montserrat, Nunito, Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

const montserrat = Montserrat({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-montserrat",
});

const nunito = Nunito({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-nunito",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	display: "swap",
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Furniture E-Commerce",
	description: "Find the best furniture for your home",
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
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
					integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
			</head>
			<body
				className={`${montserrat.variable} ${nunito.variable} ${poppins.variable} font-montserrat`}
			>
				<CartProvider>{children}</CartProvider>
			</body>
		</html>
	);
}
