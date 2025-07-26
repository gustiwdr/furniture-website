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
		e.preventDefault(); // Prevent Link navigation

		// Ensure price is always a number - more robust conversion
		let numericPrice: number;

		if (typeof price === "number") {
			numericPrice = price;
		} else {
			// Remove all non-digit characters to get a clean number string
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

		// Call custom handler if provided
		onAddToCart?.(id);
	};

	const handleHeartClick = (e: React.MouseEvent) => {
		e.preventDefault(); // Prevent Link navigation
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
			className="relative box-border no-underline text-current"
		>
			<div className="flex justify-center relative">
				<Image
					src={image}
					alt={name}
					className="max-w-full"
					width={400}
					height={400}
				/>
				<span
					className="fa fa-heart absolute top-0 right-0 text-[#ffffff] cursor-pointer hover:scale-110 transition-transform"
					style={{ WebkitTextStroke: "1px #054c73" }}
					onClick={handleHeartClick}
				></span>
			</div>

			<div className="bg-lightbg p-[20px] rounded-b-[7px] shadow-inner">
				<p className="font-bold text-[16px] sm:text-[18px] text-[#111111] mb-[10px]">
					{name}
				</p>
				<div className="flex items-center gap-[2px] text-[#FFC800] mb-2">
					{[...Array(5)].map((_, i) => (
						<span
							key={i}
							className={`fa fa-star ${
								i < rating ? "text-[#FFC800]" : "text-gray-300"
							}`}
						></span>
					))}
					<span className="text-[#979797] text-sm ml-2">
						({reviewCount} reviews)
					</span>
				</div>
				<div className="flex items-center justify-between gap-[20px] mt-2">
					<p className="text-[#333333] text-[16px] sm:text-[18px] font-bold">
						{displayPrice}
					</p>
					<div
						className="cursor-pointer hover:scale-110 transition-transform"
						onClick={handleCartClick}
						title="Add to Cart"
					>
						<Image
							src="/images/cart.png"
							alt="Add to cart"
							className="w-[40px] sm:w-[50px]"
							width={40}
							height={40}
						/>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
