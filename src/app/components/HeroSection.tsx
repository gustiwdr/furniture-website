import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
	return (
		<div className="relative w-full">
			<div className="hero-section">
				<Image
					src="/images/hero.png"
					alt="hero image"
					fill
					priority
					className="w-full h-full object-cover"
				/>
			</div>

			<div className="content-overlay">
				<p className="title">New Arrival</p>
				<p className="main-title">
					Discover Our <br />
					New Collection
				</p>
				<p className="description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
					doloribus soluta temporibus? Nobis, dolore aliquam.
				</p>
				<button>Buy Now</button>
			</div>

			<style jsx>{`
				.hero-section {
					width: 100%;
					height: 65vh;
					min-height: 500px;
				}

				.content-overlay {
					position: absolute;
					top: 150px;
					left: 350px;
					background-color: #dfe9f4;
					width: 400px;
					padding: 24px;
					border-radius: 4px;
					z-index: 5;
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
					margin-top: 16px;
					padding: 12px 24px;
					background-color: #054c73;
					font-weight: 700;
					font-size: 0.875rem;
					color: white;
					text-transform: uppercase;
					border: none;
					border-radius: 999px;
					cursor: pointer;
				}

				@media (max-width: 768px) {
					.hero-section {
						height: 45vh;
						min-height: 400px;
					}

					.content-overlay {
						top: 80px;
						left: 45px;
						width: 260px;
						padding: 16px;
					}

					.content-overlay p.main-title {
						font-size: 1.25rem;
					}

					.content-overlay button {
						padding: 10px 20px;
						font-size: 0.75rem;
					}
				}

				@media (min-width: 1024px) {
					.hero-section {
						height: 70vh;
						min-height: 600px;
					}

					.content-overlay {
						width: 400px;
						padding: 28px;
						top: 160px;
						left: 580px;
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
