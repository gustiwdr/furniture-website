"use client";

import Link from "next/link";
import { useState } from "react";

interface NavigatorProps {
	activePage: "home" | "shop" | "about-us";
}

const Navigator: React.FC<NavigatorProps> = ({ activePage }) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	return (
		<header
			className="w-full h-16 flex justify-between items-center px-4 py-3 bg-white shadow-md fixed z-10 md:px-14"
			role="banner"
			style={{ minHeight: "64px" }}
		>
			<div className="left-section">
				<h1 className="text-2xl text-primary font-bold tracking-wide">
					<Link href="/" aria-label="Furniture - Home">
						Furniture
					</Link>
				</h1>
			</div>
			{/* Icons */}
			<div className="right-section flex items-center space-x-1 sm:space-x-2 md:space-x-4">
				<Link
					href="#"
					className="text-textdark hover:text-primary p-1 sm:p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
					aria-label="Search"
				>
					<svg
						className="w-5 h-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</Link>
				<Link
					href="/shop/cart"
					className="text-textdark hover:text-primary p-1 sm:p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
					aria-label="Shopping cart"
				>
					<svg
						className="w-5 h-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 7a2 2 0 01-2 2H8a2 2 0 01-2-2L5 9z"
						/>
					</svg>
				</Link>
				<Link
					href="#"
					className="text-textdark hover:text-primary p-1 sm:p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
					aria-label="User account"
				>
					<svg
						className="w-5 h-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
						/>
					</svg>
				</Link>
				<button
					onClick={toggleMobileMenu}
					className="block md:hidden text-textdark hover:text-primary border-none bg-transparent cursor-pointer p-1 sm:p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
					aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
				>
					<svg
						className="w-5 h-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>

			{/* Desktop Nav */}
			<div className="middle-section hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2 font-bold">
				<Link
					href="/home"
					className={activePage === "home" ? "text-primary" : "text-textdark"}
				>
					Home
				</Link>
				<Link
					href="/shop"
					className={activePage === "shop" ? "text-primary" : "text-textdark"}
				>
					Shop
				</Link>
				<Link
					href="/about-us"
					className={
						activePage === "about-us" ? "text-primary" : "text-textdark"
					}
				>
					About Us
				</Link>
			</div>

			{/* Mobile Menu */}
			<div
				className={`${
					mobileMenuOpen ? "flex" : "hidden"
				} absolute top-full left-0 w-full bg-white shadow-md flex-col items-center space-y-4 py-4 md:hidden font-bold z-10`}
			>
				<Link
					href="/home"
					className={activePage === "home" ? "text-primary" : "text-textdark"}
				>
					Home
				</Link>
				<Link
					href="/shop"
					className={activePage === "shop" ? "text-primary" : "text-textdark"}
				>
					Shop
				</Link>
				<Link
					href="/about-us"
					className={
						activePage === "about-us" ? "text-primary" : "text-textdark"
					}
				>
					About Us
				</Link>
			</div>
		</header>
	);
};

export default Navigator;
