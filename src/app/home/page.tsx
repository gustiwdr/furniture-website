"use client";

import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<div className="overflow-x-hidden p-0 m-0 font-montserrat">
				<Navigator activePage="home" />
				<div className="header-spacer"></div>

				<main>
					{/* Hero Section */}
					<HeroSection />

					{/* Service Section */}
					<ServiceSection />

					{/* Inspiration Section */}
					<section className="section-container flex flex-col justify-between items-center gap-5 p-4 md:mb-5 md:px-14 md:py-6">
						<div>
							<h2 className="text-xl font-bold text-textdark text-center">
								Inspiration Collection
							</h2>
							<p className="text-sm text-textdark text-center leading-6">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
						</div>

						<div className="inspiration-image-container relative w-full max-w-[1150px]">
							<Image
								className="object-cover"
								src="/images/inspiration.png"
								alt="Modern furniture inspiration collection showcase"
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1150px"
								priority={true}
								quality={85}
								placeholder="blur"
								blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
								style={{
									objectFit: "cover",
								}}
							/>
						</div>
					</section>

					{/* Additional Section */}
					<section className="section-container bg-lightbg flex flex-col md:flex-row justify-between items-center gap-5 p-4 md:px-20 md:py-6 lg:px-32 xl:px-56">
						<div className="flex flex-col justify-between items-center text-center md:text-left md:items-start md:w-1/2">
							<h2 className="text-xl font-bold text-textdark pt-2">
								Beautify Your Space
							</h2>
							<p className="text-sm text-textdark leading-6">
								Do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ut enim ad minim veniam, quis nostrud exercitation ullamco
								laboris.
							</p>
							<button className="text-sm mt-3 bg-primary px-6 py-3 border-none rounded-full cursor-pointer font-semibold text-white uppercase">
								Learn More
							</button>
						</div>

						<div className="beautify-image-container relative w-full max-w-[300px] md:max-w-[400px]">
							<Image
								src="/images/beautify.png"
								alt="Beautify your space with modern furniture"
								fill
								sizes="(max-width: 768px) 300px, 400px"
								priority={false}
								quality={80}
								placeholder="blur"
								blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
								style={{
									objectFit: "cover",
								}}
							/>
						</div>
					</section>

					{/* Category Section */}
					<section className="section-container flex flex-col justify-between items-center gap-5 p-4 md:px-14 md:py-9">
						<div className="flex flex-col justify-between items-center">
							<h2 className="text-xl font-bold text-textdark text-center">
								Browse The Range
							</h2>
							<p className="text-sm text-textdark text-center leading-6">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
						</div>

						<div className="flex flex-col md:flex-row gap-5 w-full max-w-[1200px]">
							<div className="uppercase font-semibold text-textdark text-center flex-1">
								<div className="category-image-container relative w-full mx-auto">
									<Image
										src="/images/dining.png"
										alt="dining room furniture collection"
										fill
										sizes="(max-width: 768px) 90vw, 400px"
										priority={false}
										quality={80}
										placeholder="blur"
										blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
										style={{
											objectFit: "cover",
										}}
									/>
								</div>
								<p className="mt-2">Dining</p>
							</div>
							<div className="uppercase font-semibold text-textdark text-center flex-1">
								<div className="category-image-container relative w-full mx-auto">
									<Image
										src="/images/living.png"
										alt="living room furniture collection"
										fill
										sizes="(max-width: 768px) 90vw, 400px"
										priority={false}
										quality={80}
										placeholder="blur"
										blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
										style={{
											objectFit: "cover",
										}}
									/>
								</div>
								<p className="mt-2">Living</p>
							</div>
							<div className="uppercase font-semibold text-textdark text-center flex-1">
								<div className="category-image-container relative w-full mx-auto">
									<Image
										src="/images/bedroom.png"
										alt="bedroom furniture collection"
										fill
										sizes="(max-width: 768px) 90vw, 400px"
										priority={false}
										quality={80}
										placeholder="blur"
										blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
										style={{
											objectFit: "cover",
										}}
									/>
								</div>
								<p className="mt-2">Bedroom</p>
							</div>
						</div>
					</section>

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
