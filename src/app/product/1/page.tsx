"use client";

import { useState } from "react";
import Link from "next/link";
import Navigator from "../../components/Navigator";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import Image from "next/image";
import { useCart } from "../../context/CartContext";

const similarProducts = [
	{
		id: "5",
		name: "LYCKSELE HÅVET",
		image: "/images/similiar-1.png",
		price: "IDR4.795.000",
		reviewCount: 36,
	},
	{
		id: "13",
		name: "HAMMARN",
		image: "/images/similiar-2.png",
		price: "IDR1.795.000",
		reviewCount: 36,
	},
	{
		id: "14",
		name: "ÄLVDALEN",
		image: "/images/similiar-3.png",
		price: "IDR4.495.000",
		reviewCount: 36,
	},
	{
		id: "15",
		name: "LYCKSELE LÖVÅS",
		image: "/images/similiar-4.png",
		price: "IDR4.795.000",
		reviewCount: 36,
	},
];

export default function ProductDetail() {
	const [quantity, setQuantity] = useState(2);
	const { addToCart } = useCart();

	const increaseQuantity = () => {
		setQuantity(quantity + 1);
	};

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const handleAddToCart = () => {
		const productToAdd = {
			id: "1",
			name: "FRIDHULT",
			price: 3495000, // Numeric price
			image: "/images/product1.png",
			brand: "IKEA",
			category: "living",
		};
		addToCart(productToAdd, quantity);
	};

	return (
		<div className="font-montserrat bg-white">
			<Navigator activePage="shop" />

			<main>
				{/* Hero Section */}
				<div className="flex flex-col py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-[60px] pt-20">
					{/* Product Preview Section */}
					<div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-[70px]">
						{/* Product Image */}
						<div className="flex items-center justify-center w-full md:w-1/2 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-28">
							<Image
								src="/images/product1.png"
								alt="FRIDHULT"
								className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[730px] object-cover aspect-square"
								width={1000}
								height={1000}
							/>
						</div>

						{/* Product Info */}
						<div className="w-full md:w-1/2 px-4 py-4 sm:px-6">
							<p className="font-bold text-textdark text-2xl sm:text-[28px] md:text-[32px] mb-[10px]">
								FRIDHULT
							</p>
							<div className="text-[#FFC800] pb-[10px]">
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
								<span className="text-[#979797]">(24 reviews)</span>
							</div>
							<p className="text-primary font-bold text-xl sm:text-2xl">
								IDR3.495.000
							</p>
							<div className="mt-4 sm:mt-[30px]">
								<p className="font-bold text-textdark text-lg sm:text-[20px] mb-[10px]">
									Description
								</p>
								<p className="font-medium text-[#979797] text-[14px] sm:text-[15px] leading-[25px] sm:leading-[30px] mb-[10px]">
									FRIDHULT sofa bed is designed to use as little space as
									possible, while maximizing the sleeping surface. Perfect if
									you live in a small space and want to be able to easily
									transform your sofa into a bed.
								</p>
							</div>
						</div>
					</div>

					{/* Additional Images & Add to Cart Section */}
					<div className="flex flex-col lg:flex-row justify-between mt-8 md:mt-[50px] gap-6 lg:gap-[80px]">
						{/* Additional Images */}
						<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-[60px] items-center">
							<div className="additional-img">
								<Image
									src="/images/fridhult-add-1.png"
									alt=""
									className="w-full"
									width={100}
									height={100}
								/>
							</div>
							<div className="additional-img">
								<Image
									src="/images/fridhult-add-2.png"
									alt=""
									className="w-full"
									width={100}
									height={100}
								/>
							</div>
							<div className="additional-img">
								<Image
									src="/images/fridhult-add-3.png"
									alt=""
									className="w-full"
									width={100}
									height={100}
								/>
							</div>
							<div className="additional-img">
								<Image
									src="/images/fridhult-add-4.png"
									alt=""
									className="w-full"
									width={100}
									height={100}
								/>
							</div>
						</div>

						{/* Add to Cart Section */}
						<div className="flex flex-col items-stretch w-full lg:w-[690px]">
							<div className="flex items-center justify-between gap-4 sm:gap-[20px]">
								<div className="inline-flex items-center border border-[#979797]">
									<button
										onClick={decreaseQuantity}
										className="w-[40px] sm:w-[60px] h-6 flex items-center justify-center bg-transparent text-[#054C73] border-none cursor-pointer"
									>
										-
									</button>
									<span className="min-w-[40px] sm:min-w-[60px] min-h-6 flex items-center justify-center px-2 border-l border-r border-[#979797]">
										{quantity}
									</span>
									<button
										onClick={increaseQuantity}
										className="w-[40px] sm:w-[60px] h-6 flex items-center justify-center bg-transparent text-[#054C73] border-none cursor-pointer"
									>
										+
									</button>
								</div>

								<div className="w-full">
									<Link href="/shop/cart" className="w-full block">
										<button
											type="button"
											onClick={handleAddToCart}
											className="add-to-cart-btn w-full block p-3 bg-[#054C73] text-[#ffffff] font-bold border-none rounded-[8px] text-base sm:text-lg text-center cursor-pointer"
										>
											Add to Cart
										</button>
									</Link>
								</div>
							</div>

							<div className="w-full mt-[15px]">
								<button className="w-full block p-3 bg-[#ffffff] text-[#054C73] font-bold text-base sm:text-lg border border-[#054C73] rounded-[7px] text-center cursor-pointer">
									Add to Wishlist
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Product Details Section */}
				<div className="px-4 sm:px-8 md:px-12 lg:px-[60px] py-[30px]">
					<p className="font-bold text-xl sm:text-2xl md:text-[24px] text-textdark mb-[20px]">
						Product Details
					</p>

					<div className="border border-textdark rounded-[10px] px-4 sm:px-6 md:px-[50px] py-[5px]">
						<p className="font-medium text-[14px] sm:text-[15px] text-[#979797] mt-[10px] mb-0">
							Small, neat dimensions and minimalist armrests make FRIDHULT sofa
							bed easy to fit, even in limited spaces, while maximising the
							sleeping surface.
						</p>

						<p className="mt-[15px] font-bold text-lg sm:text-[20px] text-textdark">
							Spesifications
						</p>

						<div className="w-full mx-auto">
							<div className="flex flex-col sm:flex-row justify-between items-start py-[10px] border-b border-textdark">
								<div className="text-start mb-3 sm:mb-0">
									<div className="text-[#979797] text-[14px] sm:text-[15px] font-medium">
										Color
									</div>
									<div className="text-textdark text-[14px] sm:text-[15px] font-bold">
										Yellow
									</div>
								</div>

								<div className="text-start w-full sm:w-1/2">
									<div className="text-[#979797] text-[14px] sm:text-[15px] font-medium">
										Fabric
									</div>
									<div className="text-textdark text-[14px] sm:text-[15px] font-bold">
										100% polyester
									</div>
								</div>
							</div>

							<div className="flex flex-col sm:flex-row justify-between items-start py-[10px] border-b border-textdark">
								<div className="text-start mb-3 sm:mb-0">
									<div className="text-[#979797] text-[14px] sm:text-[15px] font-medium">
										Legs
									</div>
									<div className="text-textdark text-[14px] sm:text-[15px] font-bold">
										ABS plastic
									</div>
								</div>

								<div className="text-start w-full sm:w-1/2">
									<div className="text-[#979797] text-[14px] sm:text-[15px] font-medium">
										Filling
									</div>
									<div className="text-textdark text-[14px] sm:text-[15px] font-bold">
										100% polyester
									</div>
								</div>
							</div>

							<div className="flex flex-col sm:flex-row justify-between items-start py-[10px]">
								<div className="text-start mb-3 sm:mb-0">
									<div className="text-[#979797] text-[14px] sm:text-[15px] font-medium">
										Lining
									</div>
									<div className="text-textdark text-[14px] sm:text-[15px] font-bold">
										100% polypropylene
									</div>
								</div>

								<div className="text-start w-full sm:w-1/2">
									<div className="text-[#979797] text-[14px] sm:text-[15px] font-medium">
										Warranty
									</div>
									<div className="text-textdark text-[14px] sm:text-[15px] font-bold">
										10-year guarantee
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Customer Reviews Section */}
				<div className="py-[30px] px-4 sm:px-8 md:px-12 lg:px-[60px]">
					<p className="font-bold text-xl sm:text-2xl md:text-[24px] text-textdark">
						Customer Reviews (20)
					</p>

					<div className="mt-[20px]">
						{/* Review 1 */}
						<div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 sm:gap-[40px]">
							<div className="bg-[#054C73] text-[#ffffff] flex justify-center items-center w-[78px] py-[10px] px-[20px] gap-[2px]">
								<p className="font-bold text-[25px]">4</p>
								<span className="fa fa-star text-[23px]"></span>
							</div>
							<div className="py-[10px] w-full">
								<p className="text-[#979797] text-[14px] sm:text-[15px] font-medium leading-[25px]">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry&apos;s
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries
								</p>
								<div className="flex gap-4 sm:gap-[15px] py-[10px] flex-wrap">
									<div>
										<Image
											src="/images/cs-img-1.png"
											alt="image-error"
											className="max-w-full"
											width={100}
											height={100}
										/>
									</div>
									<div>
										<Image
											src="/images/cs-img-2.png"
											alt="image-error"
											className="max-w-full"
											width={100}
											height={100}
										/>
									</div>
								</div>
								<div className="flex gap-[20px] pb-[10px] border-b border-black text-[#979797] text-[14px] sm:text-[15px] font-medium leading-[25px]">
									<p>John Doe</p>
									<p>11 Oct 2025</p>
								</div>
							</div>
						</div>

						{/* Review 2 */}
						<div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 sm:gap-[40px] mt-[20px]">
							<div className="bg-[#054C73] text-[#ffffff] flex justify-center items-center w-[78px] py-[10px] px-[20px] gap-[2px]">
								<p className="font-bold text-[25px]">4</p>
								<span className="fa fa-star text-[23px]"></span>
							</div>
							<div className="py-[10px] w-full">
								<p className="text-[#979797] text-[14px] sm:text-[15px] font-medium leading-[25px]">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry&apos;s
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries
								</p>
								<div className="flex gap-[20px] pb-[10px] border-b border-black text-[#979797] text-[14px] sm:text-[15px] font-medium leading-[25px]">
									<p>John Doe</p>
									<p>11 Oct 2025</p>
								</div>
							</div>
						</div>

						{/* Review 3 */}
						<div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 sm:gap-[40px] mt-[20px]">
							<div className="bg-[#054C73] text-[#ffffff] flex justify-center items-center w-[78px] py-[10px] px-[20px] gap-[2px]">
								<p className="font-bold text-[25px]">4</p>
								<span className="fa fa-star text-[23px]"></span>
							</div>
							<div className="py-[10px] w-full">
								<p className="text-[#979797] text-[14px] sm:text-[15px] font-medium leading-[25px]">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry&apos;s
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries
								</p>
								<div className="flex gap-[20px] pb-[10px] text-[#979797] text-[14px] sm:text-[15px] font-medium leading-[25px]">
									<p>John Doe</p>
									<p>11 Oct 2025</p>
								</div>
							</div>
						</div>
					</div>
					<p className="font-medium text-lg sm:text-[20px] text-[#111111] mt-[20px] cursor-pointer">
						View All 20 reviews
					</p>
				</div>

				{/* Similar Product Section */}
				<div className="py-[30px] sm:py-[50px] px-6 sm:px-8 md:px-12 lg:px-[60px]">
					<p className="text-xl sm:text-2xl md:text-[24px] font-bold text-textdark mb-[20px]">
						Similar Products
					</p>

					<div className="mb-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 md:gap-[30px]">
						{similarProducts.map((product) => (
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
