"use client";

import { useCart } from "../../context/CartContext";
import Navigator from "../../components/Navigator";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Cart() {
	const {
		items,
		updateQuantity,
		removeFromCart,
		getTotalItems,
		getSubtotal,
		getTax,
		getShipping,
		getTotalPrice,
		clearCart,
	} = useCart();

	// Format price to IDR
	const formatPrice = (price: number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
			minimumFractionDigits: 0,
		}).format(price);
	};

	const handleQuantityChange = (productId: string, newQuantity: number) => {
		if (newQuantity < 1) return;
		updateQuantity(productId, newQuantity);
	};

	return (
		<div className="font-montserrat bg-white">
			<Navigator activePage="shop" />

			<div className="max-w-[1440px] mx-auto py-[70px] px-4 sm:px-[60px]">
				{/* Cart Title */}
				<div className="flex items-center justify-between mb-[24px] mt-10">
					<h2 className="text-[24px] font-[700] text-textdark">
						Your Cart ({getTotalItems()} items)
					</h2>
				</div>

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
									{items.length === 0 ? (
										<tr>
											<td
												colSpan={6}
												className="px-[40px] py-[60px] text-center"
											>
												<p className="text-[16px] text-textdark mb-4">
													Your cart is empty
												</p>
												<Link href="/shop" className="text-primary underline">
													Continue Shopping
												</Link>
											</td>
										</tr>
									) : (
										items.map((item) => (
											<tr key={item.id}>
												<td className="px-[40px] py-[40px] text-center align-middle">
													<div className="flex justify-center">
														<div className="relative w-[113px] aspect-square">
															<Image
																src={item.image}
																alt={item.name}
																className="absolute inset-0 w-full h-full object-cover rounded"
																width={113}
																height={113}
															/>
														</div>
													</div>
												</td>
												<td className="px-[40px] py-[40px] text-center align-middle">
													<p className="text-[14px] font-[500] text-textdark">
														{item.name}
													</p>
													{item.brand && (
														<p className="text-[12px] text-gray-500">
															{item.brand}
														</p>
													)}
												</td>
												<td className="px-[40px] py-[40px] text-center align-middle">
													<p className="text-[14px] font-[500] text-textdark">
														{formatPrice(item.price)}
													</p>
												</td>
												<td className="px-[40px] py-[40px] text-center align-middle">
													<div className="flex justify-center">
														<div className="inline-flex items-center border border-[#979797]">
															<button
																onClick={() =>
																	handleQuantityChange(
																		item.id,
																		item.quantity - 1
																	)
																}
																className="w-6 h-6 flex items-center justify-center bg-transparent text-[#054C73] border-none cursor-pointer hover:bg-gray-100"
															>
																-
															</button>
															<span className="min-w-[12px] min-h-6 flex items-center justify-center px-2 border-l border-r border-[#979797]">
																{item.quantity}
															</span>
															<button
																onClick={() =>
																	handleQuantityChange(
																		item.id,
																		item.quantity + 1
																	)
																}
																className="w-6 h-6 flex items-center justify-center bg-transparent text-[#054C73] border-none cursor-pointer hover:bg-gray-100"
															>
																+
															</button>
														</div>
													</div>
												</td>
												<td className="px-[40px] py-[40px] text-center align-middle">
													<p className="text-[14px] font-[500] text-textdark">
														{formatPrice(item.price * item.quantity)}
													</p>
												</td>
												<td className="px-[40px] py-[40px] text-center align-middle">
													<button
														onClick={() => removeFromCart(item.id)}
														className="bg-[#ffffff] border-none cursor-pointer hover:opacity-70 transition-opacity"
														title="Remove item"
													>
														<svg
															fill="#054C73"
															width="20"
															height="20"
															viewBox="0 0 32 32"
														>
															<path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path>
														</svg>
													</button>
												</td>
											</tr>
										))
									)}
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
						<button className="bg-primary text-white px-3 py-2 w-[131px] max-w-full text-sm font-semibold uppercase border-none cursor-pointer hover:bg-primary/90">
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
									{formatPrice(getSubtotal())}
								</p>
							</div>
							<div className="flex items-center justify-between px-[16px] py-[16px] text-[14px] border-t border-b border-textdark">
								<h3 className="font-[600]">Tax (11%)</h3>
								<p className="font-[600]">{formatPrice(getTax())}</p>
							</div>
							<div className="flex items-center justify-between px-[16px] py-[16px] text-[14px] border-b border-textdark">
								<h3 className="font-[600]">Shipping</h3>
								<p className="font-[600]">
									{getShipping() === 0
										? "Free Shipping"
										: formatPrice(getShipping())}
								</p>
							</div>
							<div className="flex items-center justify-between px-[16px] py-[16px] text-[14px]">
								<h3 className="font-[600] text-lg">Total</h3>
								<p className="font-[600] text-lg">
									{formatPrice(getTotalPrice())}
								</p>
							</div>
						</div>

						<div className="flex items-center gap-4 mt-4">
							{items.length > 0 ? (
								<Link href="/shop/cart/billings" className="w-full">
									<button className="checkout-btn bg-primary text-white w-full p-4 rounded-[10px] text-sm font-semibold uppercase border-none cursor-pointer hover:bg-primary/90 transition-colors">
										Proceed to Checkout
									</button>
								</Link>
							) : (
								<Link href="/shop" className="w-full">
									<button className="checkout-btn bg-gray-400 text-white w-full p-4 rounded-[10px] text-sm font-semibold uppercase mt-4 border-none cursor-not-allowed">
										Shop Now
									</button>
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
