"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Register() {
	// Media query handler untuk responsive layout
	useEffect(() => {
		const updateLayout = () => {
			const width = window.innerWidth;

			// Media queries untuk responsive
			if (width <= 992) {
				document.querySelector(".main-content")?.classList.remove("flex");
				document.querySelector(".main-content")?.classList.add("block");
				if (document.querySelector(".right-section")) {
					(
						document.querySelector(".right-section") as HTMLElement
					).style.display = "none";
				}

				const formContainer = document.querySelector(".form-container");
				if (formContainer) {
					(formContainer as HTMLElement).style.maxWidth = "600px";
					(formContainer as HTMLElement).style.margin = "0 auto";
					(formContainer as HTMLElement).style.height = "auto";
					(formContainer as HTMLElement).style.minHeight = "auto";
				}
			} else {
				document.querySelector(".main-content")?.classList.add("flex");
				document.querySelector(".main-content")?.classList.remove("block");
				if (document.querySelector(".right-section")) {
					(
						document.querySelector(".right-section") as HTMLElement
					).style.display = "flex";
				}

				const formContainer = document.querySelector(".form-container");
				if (formContainer) {
					(formContainer as HTMLElement).style.maxWidth = "";
					(formContainer as HTMLElement).style.margin = "";
					(formContainer as HTMLElement).style.height =
						width <= 1200 ? "auto" : "933px";
					(formContainer as HTMLElement).style.minHeight =
						width <= 1200 ? "800px" : "";
				}
			}

			if (width <= 768) {
				document.querySelector(".main-content")?.classList.remove("p-12");
				document.querySelector(".main-content")?.classList.add("p-6");
				document.querySelector(".main-content")?.classList.add("shadow-none");

				document.querySelector(".form-container")?.classList.remove("p-16");
				document.querySelector(".form-container")?.classList.add("p-8");
			} else {
				document.querySelector(".main-content")?.classList.add("p-12");
				document.querySelector(".main-content")?.classList.remove("p-6");
				document
					.querySelector(".main-content")
					?.classList.remove("shadow-none");

				document.querySelector(".form-container")?.classList.add("p-16");
				document.querySelector(".form-container")?.classList.remove("p-8");
			}
		};

		// Run on load and on resize
		updateLayout();
		window.addEventListener("resize", updateLayout);

		return () => {
			window.removeEventListener("resize", updateLayout);
		};
	}, []);

	return (
		<div className="font-montserrat bg-white min-h-screen flex items-center justify-center p-5">
			<div className="container w-full max-w-7xl">
				<div className="main-content flex gap-12 p-12 bg-white rounded-xl shadow-lg">
					{/* Left Section */}
					<div className="left-section w-full lg:w-1/2">
						<div className="form-container w-full bg-lightbg h-933 p-16 rounded-3xl">
							<h1 className="text-3xl font-bold text-primary mb-3 text-center">
								Create your account
							</h1>
							<p className="subtitle text-lg text-textdark mb-8 text-center">
								Join us to access the latest collection
								<br />
								and product catalog
							</p>

							<button
								type="button"
								className="google-btn w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-2xl text-sm font-bold text-textdark bg-white hover:bg-gray-50 transition"
							>
								<svg
									width="30"
									height="30"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 48 48"
									className="mr-3"
								>
									<path
										fill="#FFC107"
										d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
									></path>
									<path
										fill="#FF3D00"
										d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
									></path>
									<path
										fill="#4CAF50"
										d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
									></path>
									<path
										fill="#1976D2"
										d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
									></path>
								</svg>
								Login With Google
							</button>

							{/* Divider */}
							<div className="divider flex items-center justify-center gap-4 my-6">
								<div className="divider-line flex-1 h-px bg-black bg-opacity-20"></div>
								<span className="divider-text text-textdark text-lg">or</span>
								<div className="divider-line flex-1 h-px bg-black bg-opacity-20"></div>
							</div>

							{/* Form */}
							<form className="register-form flex flex-col gap-5">
								<div className="form-group mb-2">
									<label className="font-bold text-lg text-textdark block mb-1">
										Name<span className="required text-red-500">*</span>
									</label>
									<input
										type="text"
										placeholder="Enter your name"
										className="w-full text-textdark text-opacity-50 border border-black border-opacity-20 rounded-3xl py-4 px-6 text-base outline-none"
									/>
								</div>

								<div className="form-group mb-2">
									<label className="font-bold text-lg text-textdark block mb-1">
										Email<span className="required text-red-500">*</span>
									</label>
									<input
										type="email"
										placeholder="Enter your email"
										className="w-full text-textdark text-opacity-50 border border-black border-opacity-20 rounded-3xl py-4 px-6 text-base outline-none"
									/>
								</div>

								<div className="form-group mb-2">
									<label className="font-bold text-lg text-textdark block mb-1">
										Password<span className="required text-red-500">*</span>
									</label>
									<input
										type="password"
										placeholder="Enter your password"
										className="w-full text-textdark text-opacity-50 border border-black border-opacity-20 rounded-3xl py-4 px-6 text-base outline-none"
									/>
								</div>

								{/* Terms Checkbox */}
								<div className="checkbox-group flex items-start gap-3 mt-4">
									<input
										type="checkbox"
										className="w-4 h-4 mt-1 border border-black border-opacity-20 rounded"
									/>
									<label className="font-bold text-textdark text-lg leading-tight">
										I agree to all Term, Privacy Policy and Fees
									</label>
								</div>

								{/* Sign Up Button */}
								<Link href="/login" className="w-full">
									<button
										type="button"
										className="signup-btn w-full bg-primary text-white text-lg font-bold h-14 rounded-2xl mt-4 border-none cursor-pointer"
									>
										Sign Up
									</button>
								</Link>
							</form>

							{/* Login Link */}
							<p className="login-link text-center font-bold text-textdark text-lg mt-6">
								Already have an account?
								<Link
									href="/login"
									className="login-link-text text-primary no-underline ml-1"
								>
									Sign In
								</Link>
							</p>
						</div>
					</div>

					{/* Right Section */}
					<div className="right-section w-full lg:w-1/2 relative flex items-end justify-end">
						<div className="image-container relative z-20">
							<img
								className="main-image w-full h-full object-cover"
								src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
								alt="Furniture"
							/>
							<div className="image-text absolute bottom-8 right-4 p-2">
								<h2 className="text-3xl font-bold text-primary leading-tight mb-2 text-right p-1">
									Discovering the Best
									<br />
									Furniture for your Home
								</h2>
								<p className="text-lg text-primary text-center p-1">
									Stylish, comfortable, and functional
								</p>
							</div>
						</div>
						<div className="right-section-bg absolute z-10 -top-12 -right-12 rounded-xl"></div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.main-image {
					border-top-right-radius: 75px;
					border-top-left-radius: 12px;
					border-bottom-right-radius: 12px;
					border-bottom-left-radius: 75px;
					transform: scaleX(-1);
					width: 643px;
					height: 933px;
				}

				.right-section-bg {
					background: linear-gradient(
						180deg,
						rgba(5, 76, 115, 0.89) 0%,
						rgba(5, 76, 115, 0.89) 100%
					);
					width: 643px;
					height: 933px;
				}

				.image-text h2,
				.image-text p {
					background-color: white;
					display: inline-block;
				}

				@media (max-width: 1200px) {
					.form-container,
					.main-image,
					.right-section-bg {
						height: auto;
						min-height: 800px;
					}
				}

				@media (max-width: 992px) {
					.right-section {
						display: none;
					}
				}
			`}</style>
		</div>
	);
}
