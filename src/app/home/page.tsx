"use client";
import { useEffect } from "react";
import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import Image from "next/image";

export default function Home() {


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

						<Image
							className="object-cover"
							src="/images/inspiration.png"
							alt="inspiration"
							width={1150}
							height={400}
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

						<Image
							className="w-full max-w-[300px] md:max-w-[400px] md:w-auto"
							src="/images/beautify.png"
							alt="additional"
							width={400}
							height={400}
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
								<Image
									className=""
									src="/images/dining.png"
									alt="dining room"
									width={400}
									height={400}
								/>
								<p className="mt-2">Dining</p>
							</div>
							<div className="uppercase font-semibold text-textdark text-center">
								<Image
									className=""
									src="/images/living.png"
									alt="living room"
									width={400}
									height={400}
								/>
								<p className="mt-2">Living</p>
							</div>
							<div className="uppercase font-semibold text-textdark text-center">
								<Image
									className=""
									src="/images/bedroom.png"
									alt="bedroom"
									width={400}
									height={400}
								/>
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
