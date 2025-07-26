import Image from "next/image";
import Link from "next/link";
import { Product } from "../types/product";

interface ProductCardProps {
	id: string;
	name: string;
	image: string;
	price: string | number; // Support both formats
	reviewCount: number;
	rating?: number;
	// Optional Product fields
	category?: string;
	brand?: string;
	// Event handlers
	onAddToCart?: (productId: string) => void;
	onToggleFavorite?: (productId: string) => void;
}

const ProductCard = ({
	id,
	name,
	image,
	price,
	reviewCount,
	rating,
	onAddToCart,
	onToggleFavorite,
}: ProductCardProps) => {
	const handleCartClick = (e: React.MouseEvent) => {
		e.preventDefault(); // Prevent Link navigation
		onAddToCart?.(id);
	};

	const handleHeartClick = (e: React.MouseEvent) => {
		e.preventDefault(); // Prevent Link navigation
		onToggleFavorite?.(id);
	};

	// Format price display
	const displayPrice =
		typeof price === "string" ? price : `IDR ${price.toLocaleString()}`;

	// Display rating stars
	const displayRating = rating || 5; // Default to 5 if not provided
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
				<div className="flex items-center gap-[2px] text-[#FFC800]">
					{[1, 2, 3, 4, 5].map((star) => (
						<span
							key={star}
							className={`fa fa-star ${
								star <= displayRating ? "text-[#FFC800]" : "text-gray-300"
							}`}
						></span>
					))}
					<span className="text-[#979797] text-sm">
						({reviewCount} reviews)
					</span>
				</div>
				<div className="flex items-center justify-between gap-[20px] mt-2">
					<div className="flex flex-col">
						<p className="text-[#333333] text-[16px] sm:text-[18px] font-bold">
							{displayPrice}
						</p>
					</div>
					<div
						className="cursor-pointer hover:scale-110 transition-transform"
						onClick={handleCartClick}
					>
						<Image
							src="/images/cart.png"
							alt="cart icon"
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
