import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
	id: string;
	name: string;
	image: string;
	price: string;
	reviewCount: number;
}

const ProductCard = ({
	id,
	name,
	image,
	price,
	reviewCount,
}: ProductCardProps) => {
	return (
		<Link
			href={`/product/${id}`}
			className="relative box-border no-underline text-current"
		>
			<div className="flex justify-center relative">
				<img src={image} alt={name} className="max-w-full" />
				<span
					className="fa fa-heart absolute top-0 right-0 text-[#ffffff]"
					style={{ WebkitTextStroke: "1px #054c73" }}
				></span>
			</div>

			<div className="bg-lightbg p-[20px] rounded-b-[7px] shadow-inner">
				<p className="font-bold text-[16px] sm:text-[18px] text-[#111111] mb-[10px]">
					{name}
				</p>
				<div className="flex items-center gap-[2px] text-[#FFC800]">
					<span className="fa fa-star"></span>
					<span className="fa fa-star"></span>
					<span className="fa fa-star"></span>
					<span className="fa fa-star"></span>
					<span className="fa fa-star"></span>
					<span className="text-[#979797] text-sm">
						({reviewCount} reviews)
					</span>
				</div>
				<div className="flex items-center justify-between gap-[20px] mt-2">
					<p className="text-[#333333] text-[16px] sm:text-[18px] font-bold">
						{price}
					</p>
					<div className="cursor-pointer">
						<img
							src="/images/cart.png"
							alt="cart icon"
							className="w-[40px] sm:w-[50px]"
						/>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
