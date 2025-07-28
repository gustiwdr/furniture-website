"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
	id: string;
	name: string;
	image: string;
	price: string | number;
	reviewCount: number;
	rating?: number;
	category?: string;
	brand?: string;
	onAddToCart?: (productId: string) => void;
	onToggleFavorite?: (productId: string) => void;
}

const ProductCard = ({
	id,
	name,
	image,
	price,
	reviewCount,
	rating = 5,
	category,
	brand,
	onAddToCart,
	onToggleFavorite,
}: ProductCardProps) => {
	const { addToCart } = useCart();

	const handleCartClick = (e: React.MouseEvent) => {
		e.preventDefault();
		let numericPrice: number;

		if (typeof price === "number") {
			numericPrice = price;
		} else {
			const cleanedPrice = String(price).replace(/\\D/g, "");
			numericPrice = parseInt(cleanedPrice, 10) || 0;
		}

		if (numericPrice > 0) {
			addToCart({
				id,
				name,
				image,
				price: numericPrice,
				category,
				brand,
			});
		} else {
			console.error("Could not add to cart due to invalid price", {
				name,
				price,
			});
		}

		onAddToCart?.(id);
	};

	const handleHeartClick = (e: React.MouseEvent) => {
		e.preventDefault();
		onToggleFavorite?.(id);
	};

	// Format price display
	const displayPrice =
		typeof price === "number"
			? new Intl.NumberFormat("id-ID", {
					style: "currency",
					currency: "IDR",
					minimumFractionDigits: 0,
			  }).format(price)
			: price;
	return (
		<Link
			href={`/product/${id}`}
			className="relative box-border no-underline text-current group block w-full"
			aria-label={`View details for ${name}`}
			style={{
				contain: "layout style size",
				contentVisibility: "auto",
				minHeight: "420px",
				maxHeight: "420px",
				overflow: "hidden",
			}}
		>
			<div
				className="flex flex-col bg-white rounded-[7px] shadow-lg overflow-hidden"
				style={{ height: "420px" }}
			>
				<div
					className="relative bg-gray-100 overflow-hidden"
					style={{
						height: "256px",
						minHeight: "256px",
						maxHeight: "256px",
						aspectRatio: "1 / 1",
					}}
				>
					<Image
						src={image}
						alt={`${name} - ${category} furniture`}
						className="object-cover rounded-t-[7px]"
						fill
						sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 22vw"
						priority={false}
						loading="lazy"
						placeholder="blur"
						quality={85}
						blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
					/>
					<button
						onClick={handleHeartClick}
						aria-label={`Add ${name} to favorites`}
						className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white rounded-full hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
					>
						<svg
							className="w-5 h-5 text-gray-600 hover:text-red-500"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							/>
						</svg>
					</button>
				</div>
				<div
					className="bg-lightbg p-[20px] rounded-b-[7px] shadow-inner flex-1"
					style={{
						height: "164px",
						minHeight: "164px",
						maxHeight: "164px",
					}}
				>
					<h3 className="font-bold text-[16px] sm:text-[18px] text-[#111111] mb-[10px] line-clamp-2">
						{name}
					</h3>
					<div
						className="flex items-center gap-[2px] text-[#FFC800] mb-2"
						aria-label={`Rating: ${rating} out of 5 stars`}
					>
						{[...Array(5)].map((_, i) => (
							<svg
								key={i}
								className={`w-4 h-4 ${
									i < rating ? "text-[#FFC800]" : "text-gray-300"
								}`}
								fill="currentColor"
								viewBox="0 0 20 20"
								aria-hidden="true"
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
						))}
						<span
							className="text-[#979797] text-sm ml-2"
							aria-label={`${reviewCount} customer reviews`}
						>
							({reviewCount} reviews)
						</span>
					</div>
					<div className="flex items-center justify-between gap-[20px] mt-2">
						<p
							className="text-[#333333] text-[16px] sm:text-[18px] font-bold"
							aria-label={`Price: ${displayPrice}`}
						>
							{displayPrice}
						</p>
						<button
							onClick={handleCartClick}
							aria-label={`Add ${name} to shopping cart`}
							className="p-2 hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
							title="Add to Cart"
						>
							<svg
								className="w-8 h-8 sm:w-10 sm:h-10 text-primary"
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
						</button>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
