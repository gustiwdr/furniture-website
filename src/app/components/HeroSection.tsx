import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
	return (
		<div className="relative w-full">
			<div
				className="hero-section relative overflow-hidden"
				style={{
					aspectRatio: "16 / 9",
					width: "100%",
					height: "clamp(400px, 60vh, 700px)",
					minHeight: "400px",
					maxHeight: "700px",
				}}
			>
				<Image
					src="/images/hero.png"
					alt="Modern furniture collection - hero banner"
					fill
					priority
					className="w-full h-full object-cover"
					sizes="100vw"
					quality={90}
					style={{
						objectFit: "cover",
					}}
				/>
			</div>

			<div className="content-overlay">
				<p className="title">New Arrival</p>
				<p className="main-title">
					Discover Our <br />
					New Collection
				</p>
				<p className="description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolore
					aliquam.
				</p>
				<button>Buy Now</button>
			</div>

			<style jsx>{`
				.hero-section {
					width: 100%;
					aspect-ratio: 16 / 9;
					min-height: 400px;
					max-height: 700px;
					height: clamp(400px, 60vh, 700px);
				}

				.content-overlay {
					position: absolute;
					top: 15%;
					left: 5%;
					background-color: #dfe9f4;
					width: min(400px, 90%);
					padding: 24px;
					border-radius: 4px;
					z-index: 5;
					transform: translateZ(0);
					max-height: none;
					overflow: visible;
					min-height: fit-content;
				}

				.content-overlay p.title {
					font-size: 0.75rem;
					font-weight: 600;
					color: #333333;
					letter-spacing: 5px;
				}

				.content-overlay p.main-title {
					font-size: 2rem;
					font-weight: 700;
					padding-top: 15px;
					padding-bottom: 15px;
					color: #054c73;
				}

				.content-overlay p.description {
					font-size: 0.875rem;
					color: #333333;
					line-height: 25px;
				}

				.content-overlay button {
					margin-top: 20px; /* Increased top margin */
					margin-bottom: 8px; /* Added bottom margin */
					padding: 12px 24px;
					background-color: #054c73;
					font-weight: 700;
					font-size: 0.875rem;
					color: white;
					text-transform: uppercase;
					border: none;
					border-radius: 999px;
					cursor: pointer;
					display: block; /* Ensure button is displayed */
					width: fit-content; /* Button width based on content */
					transition: background-color 0.3s ease;
				}

				.content-overlay button:hover {
					background-color: #043a5a;
				}

				@media (max-width: 768px) {
					.hero-section {
						aspect-ratio: 4 / 3;
						min-height: 300px;
						height: clamp(300px, 50vh, 500px);
					}

					.content-overlay {
						top: 10%;
						left: 5%;
						width: min(280px, 90%);
						padding: 16px 16px 24px 16px; /* Added extra bottom padding for mobile */
						max-height: none; /* Remove height constraint */
						overflow: visible; /* Show all content */
						min-height: fit-content;
					}

					.content-overlay p.main-title {
						font-size: 1.25rem;
					}

					.content-overlay button {
						padding: 10px 20px;
						font-size: 0.75rem;
						margin-top: 16px; /* Increased margin for mobile */
						margin-bottom: 6px; /* Added bottom margin for mobile */
						display: block; /* Ensure button is displayed */
						width: fit-content; /* Button width based on content */
					}
				}

				@media (min-width: 1024px) {
					.hero-section {
						aspect-ratio: 16 / 9;
						min-height: 500px;
						height: clamp(500px, 65vh, 700px);
					}

					.content-overlay {
						width: 400px;
						padding: 28px;
						top: 12%;
						left: 50%;
						max-height: none;
						overflow: visible;
						min-height: fit-content;
					}

					.content-overlay p.main-title {
						font-size: 1.75rem;
					}

					.content-overlay p.description {
						font-size: 0.875rem;
					}

					.content-overlay button {
						font-size: 0.875rem;
						padding: 12px 24px;
					}
				}
			`}</style>
		</div>
	);
};

export default HeroSection;
