"use client";

import Link from "next/link";
import Navigator from "../components/Navigator";
import Footer from "../components/Footer";

export default function AboutUs() {
	return (
		<div className="font-montserrat bg-white">
			<Navigator activePage="about-us" />

			<main>
				{/* Hero Section */}
				<div
					className="hero-section relative w-full bg-center bg-no-repeat bg-cover pt-24"
					style={{ backgroundImage: "url('/images/hero-about-us.png')" }}
				>
					<div className="absolute top-[75%] left-1/2 bg-[#DFE9F4] w-full max-w-[1200px] h-auto rounded-[10px] transform -translate-x-1/2 -translate-y-1/2 sm:max-w-[80%] sm:top-[75%] md:top-[75%]">
						<div className="relative p-8 z-[2]">
							<p className="text-center font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl text-primary">
								We Are A Furniture Agency Focused On Delivering Content And
								Utility User-Experiences.
							</p>
						</div>
					</div>
				</div>

				{/* Service Section */}
				<div className="bg-lightbg grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
					<div className="flex items-center gap-3 justify-center">
						<div>
							<i className="fas fa-truck text-3xl text-textdark"></i>
						</div>
						<div className="text-textdark">
							<p className="font-semibold text-base md:text-xl">
								Free Delivery
							</p>
							<p className="text-sm">Lorem ipsum dolor sit amet.</p>
						</div>
					</div>
					<div className="flex items-center gap-3 justify-center">
						<div>
							<i className="far fa-clock text-3xl text-textdark"></i>
						</div>
						<div className="text-textdark">
							<p className="font-semibold text-base md:text-xl">Support 24/7</p>
							<p className="text-sm">Lorem ipsum dolor sit amet.</p>
						</div>
					</div>
					<div className="flex items-center gap-3 justify-center">
						<div>
							<i className="fas fa-thumbs-up text-3xl text-textdark"></i>
						</div>
						<div className="text-textdark">
							<p className="font-semibold text-base md:text-xl">
								100% Authentic
							</p>
							<p className="text-sm">Lorem ipsum dolor sit amet.</p>
						</div>
					</div>
				</div>

				{/* How It Works Section */}
				<div className="bg-white px-4 sm:px-8 md:px-16 lg:px-[100px]">
					<div className="text-center justify-center items-center py-4 md:py-6">
						<p className="font-bold text-xl text-textdark">How It Works</p>
						<p className="leading-6 text-textdark text-sm">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</div>

					<div className="flex justify-center items-center gap-[20px] flex-col md:flex-row md:items-start mb-8">
						<div className="mb-[20px]">
							<div className="relative flex justify-center">
								<img
									src="/images/how-it-works-1.png"
									alt="Purchase Securely"
									className="w-[300px] md:w-[381px] max-w-[100%] object-cover object-center rounded-[10px]"
								/>
								<span className="absolute bottom-0 left-[50%] w-[80px] bg-black rounded-full aspect-square flex items-center justify-center text-white -translate-x-[50%] translate-y-[50%] border-[15px] border-white border-solid font-bold text-[18px]">
									1
								</span>
							</div>

							<div className="mt-12 text-center">
								<p className="font-bold text-[18px] mb-[5px] text-textdark">
									Purchase Securely
								</p>
								<p className="leading-6 text-textdark text-sm">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</p>
							</div>
						</div>

						<div className="mb-[20px]">
							<div className="relative flex justify-center">
								<img
									src="/images/how-it-works-2.png"
									alt="Ships From Warehouse"
									className="w-[300px] md:w-[381px] max-w-[100%] object-cover object-center rounded-[10px]"
								/>
								<span className="absolute bottom-0 left-[50%] w-[80px] bg-black rounded-full aspect-square flex items-center justify-center text-white -translate-x-[50%] translate-y-[50%] border-[15px] border-white border-solid font-bold text-[18px]">
									2
								</span>
							</div>

							<div className="mt-12 text-center">
								<p className="font-bold text-[18px] mb-[5px] text-textdark">
									Ships From Warehouse
								</p>
								<p className="leading-6 text-textdark text-sm">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</p>
							</div>
						</div>

						<div className="mb-[20px]">
							<div className="relative flex justify-center">
								<img
									src="/images/how-it-works-3.png"
									alt="Style Your Room"
									className="w-[300px] md:w-[381px] max-w-[100%] object-cover object-center rounded-[10px]"
								/>
								<span className="absolute bottom-0 left-[50%] w-[80px] bg-black rounded-full aspect-square flex items-center justify-center text-white -translate-x-[50%] translate-y-[50%] border-[15px] border-white border-solid font-bold text-[18px]">
									3
								</span>
							</div>
							<div className="mt-12 text-center">
								<p className="font-bold text-[18px] mb-[5px] text-textdark">
									Style Your Room
								</p>
								<p className="leading-6 text-textdark text-sm">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Testimonials Section */}
				<div className="px-4 sm:px-8 md:px-16 lg:px-[75px]">
					<div className="text-center py-4 md:py-6">
						<p className="font-bold text-xl text-textdark">Testimonials</p>
						<p className="leading-6 text-textdark text-sm">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</div>

					<div className="flex justify-center items-center gap-[20px] mb-[100px] max-w-full flex-col md:flex-row">
						<div className="shadow-[inset_0.2px_0_5px_0_rgba(0,0,0,0.25)] bg-lightbg rounded-[7px] px-[20px] py-[20px] max-w-[365px]">
							<div className="text-[#FFC800] mb-[10px]">
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
							</div>
							<div className="text-[14px] text-textdark font-[500]">
								This furniture exceeded my expectations in terms of
								functionality and comfort. The thoughtful ergonomic design
								provides excellent support and ....
							</div>
							<div className="flex gap-[20px] pt-[20px] items-center">
								<div>
									<img src="/images/linda.png" alt="Linda" />
								</div>
								<div>
									<p className="text-primary font-bold pb-[2px] text-[18px]">
										Linda
									</p>
									<p className="text-[#979797] font-[600] text-sm">Designer</p>
								</div>
							</div>
						</div>

						<div className="shadow-[inset_0.2px_0_5px_0_rgba(0,0,0,0.25)] bg-lightbg rounded-[7px] px-[20px] py-[20px] max-w-[365px]">
							<div className="text-[#FFC800] mb-[10px]">
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
							</div>
							<div className="text-[14px] text-textdark font-[500]">
								This furniture exceeded my expectations in terms of
								functionality and comfort. The thoughtful ergonomic design
								provides excellent support and ....
							</div>
							<div className="flex gap-[20px] pt-[20px] items-center">
								<div>
									<img src="/images/John.png" alt="John" />
								</div>
								<div>
									<p className="text-primary font-bold pb-[2px] text-[18px]">
										John
									</p>
									<p className="text-[#979797] font-[600] text-sm">Designer</p>
								</div>
							</div>
						</div>

						<div className="shadow-[inset_0.2px_0_5px_0_rgba(0,0,0,0.25)] bg-lightbg rounded-[7px] px-[20px] py-[20px] max-w-[365px]">
							<div className="text-[#FFC800] mb-[10px]">
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
							</div>
							<div className="text-[14px] text-textdark font-[500]">
								This furniture exceeded my expectations in terms of
								functionality and comfort. The thoughtful ergonomic design
								provides excellent support and ....
							</div>
							<div className="flex gap-[20px] pt-[20px] items-center">
								<div>
									<img src="/images/bruno.png" alt="Bruno" />
								</div>
								<div>
									<p className="text-primary font-bold pb-[2px] text-[18px]">
										Bruno
									</p>
									<p className="text-[#979797] font-[600] text-sm">Designer</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Mailing Section */}
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

			<style jsx>{`
				.hero-section {
					height: 500px;
				}

				@media (min-width: 768px) {
					.hero-section {
						height: 600px;
					}
				}
			`}</style>
		</div>
	);
}
