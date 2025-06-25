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
		<header className="w-full flex justify-between items-center px-4 py-3 bg-white shadow-md fixed z-10 md:px-14">
			<div className="left-section">
				<h1 className="text-2xl text-primary font-bold tracking-wide">
					Furniture
				</h1>
			</div>
			{/* Icons */}
			<div className="right-section flex items-center space-x-4">
				<Link href="#" className="text-textdark hover:text-primary">
					<i className="fas fa-search text-xl"></i>
				</Link>
				<Link href="#" className="text-textdark hover:text-primary">
					<i className="fas fa-shopping-cart text-xl"></i>
				</Link>
				<Link href="#" className="text-textdark hover:text-primary">
					<i className="fas fa-user text-xl"></i>
				</Link>
				<button
					onClick={toggleMobileMenu}
					className="block md:hidden text-textdark hover:text-primary border-none bg-transparent cursor-pointer"
				>
					<i className="fas fa-bars text-xl"></i>
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
