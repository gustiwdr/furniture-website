"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigator from "../../components/Navigator";
import Footer from "../../components/Footer";

export default function Cart() {
	const [quantity, setQuantity] = useState(2);

	const increaseQuantity = () => {
		setQuantity(quantity + 1);
	};

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const unitPrice = 3495000;
	const subtotal = unitPrice * quantity;
	const tax = subtotal * 0.11;
	const total = subtotal + tax;

	const formatPrice = (price: number) => {
		return `IDR${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
	};

	return (
		<div className="font-montserrat bg-white">
			<Navigator activePage="shop" />

			<div className="max-w-[1440px] mx-auto py-[70px] px-4 sm:px-[60px]">
				{/* Cart Title */}
				<h2 className="text-[24px] font-[700] text-textdark mb-[24px] mt-10">
					Your Cart
				</h2>

				{/* Cart Content */}
				<div className="flex flex-col gap-[24px]">
					<div className="cart-details">
						<div className="overflow-x-auto border border-textdark rounded-[10px] mb-4">
							<table className="w-full border-collapse">
								<thead>
									<tr>
										<th className="font-semibold text-textdark uppercase text-base p-5 text-center border-b border-textdark">
											Image
										</th>
										<th className="font-semibold text-textdark uppercase text-base p-5 text-center border-b border-textdark">
											Product Name
										</th>
										<th className="font-semibold text-textdark uppercase text-base p-5 text-center border-b border-textdark">
											Unit Price
										</th>
										<th className="font-semibold text-textdark uppercase text-base p-5 text-center border-b border-textdark">
											Qty
										</th>
										<th className="font-semibold text-textdark uppercase text-base p-5 text-center border-b border-textdark">
											Subtotal
										</th>
										<th className="font-semibold text-textdark uppercase text-base p-5 text-center border-b border-textdark">
											Action
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="px-[40px] py-[40px] text-center align-middle">
											<div className="flex justify-center">
												<div className="relative w-[113px] aspect-square">
													<Image
														src="/images/product1.png"
														alt="FRIDHULT"
														className="absolute inset-0 w-full h-full object-cover rounded"
														width={113}
														height={113}
													/>
												</div>
											</div>
										</td>
										<td className="px-[40px] py-[40px] text-center align-middle">
											<p className="text-[14px] font-[500] text-textdark">
												FRIDHULT
											</p>
										</td>
										<td className="px-[40px] py-[40px] text-center align-middle">
											<p className="text-[14px] font-[500] text-textdark">
												{formatPrice(unitPrice)}
											</p>
										</td>
										<td className="px-[40px] py-[40px] text-center align-middle">
											<div className="flex justify-center">
												<div className="inline-flex items-center border border-[#979797]">
													<button
														onClick={decreaseQuantity}
														className="w-6 h-6 flex items-center justify-center bg-transparent text-[#054C73] border-none cursor-pointer"
													>
														-
													</button>
													<span className="min-w-[12px] min-h-6 flex items-center justify-center px-2 border-l border-r border-[#979797]">
														{quantity}
													</span>
													<button
														onClick={increaseQuantity}
														className="w-6 h-6 flex items-center justify-center bg-transparent text-[#054C73] border-none cursor-pointer"
													>
														+
													</button>
												</div>
											</div>
										</td>
										<td className="px-[40px] py-[40px] text-center align-middle">
											<p className="text-[14px] font-[500] text-textdark">
												{formatPrice(subtotal)}
											</p>
										</td>
										<td className="px-[40px] py-[40px] text-center align-middle">
											<button className="bg-[#ffffff] border-none">
												<svg
													fill="#054C73"
													width="50"
													height="50"
													viewBox="0 0 32 32"
												>
													<path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path>
												</svg>
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<div className="flex items-start justify-between mt-[10px] flex-col min-[769px]:flex-row">
					{/* Coupon Code */}
					<div className="flex mb-[24px] w-[476px] max-w-full">
						<input
							type="text"
							placeholder="ENTER COUPON CODE"
							className="border border-textdark px-[12px] py-[12px] w-[346px] max-w-full text-sm text-[#979797] font-medium"
						/>
						<button className="bg-primary text-white px-3 py-2 w-[131px] max-w-full text-sm font-semibold uppercase border-none cursor-pointer">
							Apply
						</button>
					</div>

					{/* Right Column - Cart Total */}
					<div className="w-full max-w-[714px] min-[769px]:pl-[60px]">
						<h2 className="text-[24px] font-[700] text-textdark mb-[16px]">
							Cart Total
						</h2>
						<div className="border border-textdark rounded-[10px] flex justify-between flex-col uppercase">
							<div className="flex items-center justify-between px-[16px] py-[16px] text-[14px]">
								<h3 className="font-[600] text-textdark">Subtotal</h3>
								<p className="font-[600] text-textdark">
									{formatPrice(subtotal)}
								</p>
							</div>
							<div className="flex items-center justify-between px-[16px] py-[16px] text-[14px] border-t border-b border-[#111111]">
								<h3 className="font-[600]">Tax</h3>
								<p className="font-[600]">{formatPrice(tax)} (11%)</p>
							</div>
							<div className="flex items-center justify-between px-[16px] py-[16px] text-[14px]">
								<h3 className="font-[600]">Total</h3>
								<p className="font-[600]">{formatPrice(total)}</p>
							</div>
						</div>
						<Link href="/shop/cart/billings">
							<button className="checkout-btn bg-primary text-white w-full p-4 rounded-[10px] text-sm font-semibold uppercase mt-4 border-none cursor-pointer">
								Proceed to Checkout
							</button>
						</Link>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
