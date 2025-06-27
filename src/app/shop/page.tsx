"use client";

import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Navigator from "../components/Navigator";
import Footer from "../components/Footer";

const products = [
	{
		id: "1",
		name: "FRIDHULT",
		image: "/images/product1.png",
		price: "IDR 1.495.000",
		reviewCount: 24,
	},
	{
		id: "2",
		name: "IVÖSJÖN",
		image: "/images/product2.png",
		price: "IDR 449.000",
		reviewCount: 36,
	},
	{
		id: "3",
		name: "TRONES",
		image: "/images/product3.png",
		price: "IDR 3.495.000",
		reviewCount: 42,
	},
	{
		id: "4",
		name: "OFTAST",
		image: "/images/product4.png",
		price: "IDR 9.900",
		reviewCount: 18,
	},
	{
		id: "5",
		name: "LYCKSELE HÅVET",
		image: "/images/product5.png",
		price: "IDR 4.795.000",
		reviewCount: 36,
	},
	{
		id: "6",
		name: "LACK",
		image: "/images/product6.png",
		price: "IDR 199.000",
		reviewCount: 36,
	},
	{
		id: "7",
		name: "LÄTTNAD",
		image: "/images/product7.png",
		price: "IDR 29.900",
		reviewCount: 26,
	},
	{
		id: "8",
		name: "NYMÅNE",
		image: "/images/product8.png",
		price: "IDR 999.000",
		reviewCount: 54,
	},
	{
		id: "9",
		name: "TVÄRHAND",
		image: "/images/product9.png",
		price: "IDR 199.000",
		reviewCount: 43,
	},
	{
		id: "10",
		name: "TORNVIKEN",
		image: "/images/product10.png",
		price: "IDR 6.999.000",
		reviewCount: 34,
	},
	{
		id: "11",
		name: "RÅSKOG",
		image: "/images/product11.png",
		price: "IDR 499.000",
		reviewCount: 14,
	},
	{
		id: "12",
		name: "RISHOLMEN",
		image: "/images/product12.png",
		price: "IDR 3.455.000",
		reviewCount: 56,
	},
];

const categories = [
	{ id: "all", name: "All Products" },
	{ id: "living", name: "Living Room" },
	{ id: "bedroom", name: "Bedroom" },
	{ id: "dining", name: "Dining" },
	{ id: "office", name: "Office" },
	{ id: "outdoor", name: "Outdoor" },
];

export default function Shop() {
	const [activeCategory, setActiveCategory] = useState("all");

	const handleCategoryClick = (categoryId: string): void => {
		setActiveCategory(categoryId);
	};

	return (
		<div className="font-montserrat bg-white">
			<Navigator activePage="shop" />

			{/* Category Filter */}
			<div className="max-w-full overflow-x-auto min-[769px]:overflow-x-hidden flex justify-start items-center gap-5 w-full p-5 mt-14 bg-[#f4f4f4] absolute">
				<div className="flex min-[769px]:grid min-[769px]:grid-cols-6 gap-5 justify-center pl-[30px] min-[700px]:pl-[10px] min-[900px]:pl-[30px] min-[1062px]:pl-[30px]">
					{categories.map((category) => (
						<button
							key={category.id}
							onClick={() => handleCategoryClick(category.id)}
							className={`${
								activeCategory === category.id
									? "bg-primary text-white font-bold"
									: "bg-[rgba(151,151,151,0.2)] text-textdark font-medium"
							} px-5 py-2.5 rounded cursor-pointer`}
						>
							{category.name}
						</button>
					))}
				</div>
			</div>

			<main>
				<div className="flex pt-36">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-12 px-[30px] md:px-[50px] max-w-full overflow-x-hidden">
						{products.map((product) => (
							<ProductCard
								key={product.id}
								id={product.id}
								name={product.name}
								image={product.image}
								price={product.price}
								reviewCount={product.reviewCount}
							/>
						))}
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
