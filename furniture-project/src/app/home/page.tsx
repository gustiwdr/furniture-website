"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";

export default function Home() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const header = document.querySelector("header");
		const hero = document.querySelector(".hero-section") as HTMLElement;

		if (header instanceof HTMLElement && hero) {
			const headerHeight = header.offsetHeight;
			hero.style.height = `calc(100vh - ${headerHeight}px)`;
		}
	}, []);

	return (
		<>
			<Head>
				<title>Furniture E-Commerce</title>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<div className="overflow-x-hidden p-0 m-0 font-montserrat">
				<Navigator activePage="home" />

				<main>
					{/* Hero Section */}
					<HeroSection />

					{/* Service Section */}
					<ServiceSection />

					{/* Inspiration Section */}
					<div className="flex flex-col justify-between items-center gap-5 p-4 md:mb-5 md:px-14 md:py-6">
						<div>
							<p className="text-xl font-bold text-textdark text-center">
								Inspiration Collection
							</p>
							<p className="text-sm text-textdark text-center leading-6">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
						</div>

						<img
							className="object-cover"
							src="/images/inspiration.png"
							alt="inspiration"
						/>
					</div>

					{/* Additional Section */}
					<div className="bg-lightbg flex flex-col md:flex-row justify-between items-center gap-5 p-4 md:px-20 md:py-6 lg:px-32 xl:px-56">
						<div className="flex flex-col justify-between items-center text-center md:text-left md:items-start md:w-1/2">
							<p className="text-xl font-bold text-textdark pt-2">
								Beautify Your Space
							</p>
							<p className="text-sm text-textdark leading-6">
								Do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ut enim ad minim veniam, quis nostrud exercitation ullamco
								laboris.
							</p>
							<button className="text-sm mt-3 bg-primary px-6 py-3 border-none rounded-full cursor-pointer font-semibold text-white uppercase">
								Learn More
							</button>
						</div>

						<img
							className="w-full max-w-[300px] md:max-w-[400px] md:w-auto"
							src="/images/beautify.png"
							alt="additional"
						/>
					</div>

					{/* Category Section */}
					<div className="flex flex-col justify-between items-center gap-5 p-4 md:px-14 md:py-9">
						<div className="flex flex-col justify-between items-center">
							<p className="text-xl font-bold text-textdark text-center">
								Browse The Range
							</p>
							<p className="text-sm text-textdark text-center leading-6">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
						</div>

						<div className="flex flex-col md:flex-row gap-5">
							<div className="uppercase font-semibold text-textdark text-center">
								<img className="" src="/images/dining.png" alt="dining room" />
								<p className="mt-2">Dining</p>
							</div>
							<div className="uppercase font-semibold text-textdark text-center">
								<img className="" src="/images/living.png" alt="living room" />
								<p className="mt-2">Living</p>
							</div>
							<div className="uppercase font-semibold text-textdark text-center">
								<img className="" src="/images/bedroom.png" alt="bedroom" />
								<p className="mt-2">Bedroom</p>
							</div>
						</div>
					</div>

					{/* Newspaper Section */}
					<div className="bg-lightbg flex flex-col justify-between items-center gap-5 p-4 md:py-9">
						<div className="flex flex-col justify-between items-center">
							<p className="text-xl font-bold text-textdark text-center">
								Join Our Mailing List
							</p>
							<p className="text-sm text-textdark text-center leading-6">
								Sign up to receive inspiration, product updates, and special
								offers from our team.
							</p>
							<div className="flex justify-center items-center mt-3">
								<input
									className="px-4 py-2 border border-primary rounded-l-md rounded-r-none flex-1"
									type="text"
									placeholder="example@gmail.com"
								/>
								<button className="bg-primary text-white px-4 py-[9px] rounded-r-md rounded-l-none uppercase font-semibold">
									Submit
								</button>
							</div>
						</div>
					</div>
				</main>

				<Footer />
			</div>
		</>
	);
}
