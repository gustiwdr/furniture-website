"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Navigator from "../../../components/Navigator";
import Footer from "../../../components/Footer";

export default function Billing() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		address: "",
		location: "",
		postalCode: "",
		country: "",
	});

	const [paymentMethod, setPaymentMethod] = useState("bank");

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handlePaymentChange = (method: string): void => {
		setPaymentMethod(method);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log("Form data:", formData);
    console.log("Payment method:", paymentMethod);
    
    alert("Proceeding to payment...");
  };

  const handlePaymentClick = () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Please fill in all required fields");
      return;
    }
    
    alert("Proceeding to payment...");
  };

	return (
		<div className="font-montserrat bg-white">
			<Navigator activePage="shop" />

			<main className="pt-16 pb-10">
				{/* Billing Section */}
				<div className="flex justify-between items-center gap-[50px] px-4 sm:px-6 md:px-[60px] py-[30px] flex-col min-[769px]:flex-row min-[769px]:items-start">
					{/* Form section */}
					<div className="w-full">
						<p className="font-bold text-[24px] text-textdark mb-[30px]">
							Billing Information
						</p>

						<form
							onSubmit={handleSubmit}
							className="flex w-full flex-col gap-[20px]"
						>
							<div className="flex justify-between w-full gap-[20px] flex-col sm:flex-row">
								<div className="w-full">
									<label className="block text-[20px] text-textdark font-[500] mb-[10px]">
										First Name
									</label>
									<input
										type="text"
										name="firstName"
										value={formData.firstName}
										onChange={handleInputChange}
										placeholder="First Name"
										className="border border-textdark px-[15px] py-[15px] w-full rounded-[10px] text-[#979797] font-medium text-[14px]"
									/>
								</div>

								<div className="w-full">
									<label className="block text-[20px] text-textdark font-[500] mb-[10px]">
										Last Name
									</label>
									<input
										type="text"
										name="lastName"
										value={formData.lastName}
										onChange={handleInputChange}
										placeholder="Last Name"
										className="border border-textdark px-[15px] py-[15px] w-full rounded-[10px] text-[#979797] font-medium text-[14px]"
									/>
								</div>
							</div>

							<div className="flex justify-between w-full gap-[20px] flex-col sm:flex-row">
								<div className="w-full">
									<label className="block text-[20px] text-textdark font-[500] mb-[10px]">
										Email Address
									</label>
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										placeholder="Email Address"
										className="border border-textdark px-[15px] py-[15px] w-full rounded-[10px] text-[#979797] font-medium text-[14px]"
									/>
								</div>

								<div className="w-full">
									<label className="block text-[20px] text-textdark font-[500] mb-[10px]">
										Phone No.
									</label>
									<input
										type="text"
										name="phone"
										value={formData.phone}
										onChange={handleInputChange}
										placeholder="Phone No."
										className="border border-textdark px-[15px] py-[15px] w-full rounded-[10px] text-[#979797] font-medium text-[14px]"
									/>
								</div>
							</div>

							<div className="flex flex-col">
								<label className="block text-[20px] text-textdark font-[500] mb-[10px]">
									Address
								</label>
								<input
									type="text"
									name="address"
									value={formData.address}
									onChange={handleInputChange}
									placeholder="Address"
									className="border border-textdark px-[15px] py-[15px] w-full rounded-[10px] text-[#979797] font-medium text-[14px]"
								/>
							</div>

							<div className="flex justify-between w-full gap-[20px] flex-col sm:flex-row">
								<div className="w-full">
									<label className="block text-[20px] text-textdark font-[500] mb-[10px]">
										Location
									</label>
									<input
										type="text"
										name="location"
										value={formData.location}
										onChange={handleInputChange}
										placeholder="Location"
										className="border border-textdark px-[15px] py-[15px] w-full rounded-[10px] text-[#979797] font-medium text-[14px]"
									/>
								</div>

								<div className="w-full">
									<label className="block text-[20px] text-textdark font-[500] mb-[10px]">
										Postal/Zip Code
									</label>
									<input
										type="number"
										name="postalCode"
										value={formData.postalCode}
										onChange={handleInputChange}
										placeholder="Postal/Zip Code"
										className="border border-textdark px-[15px] py-[15px] w-full rounded-[10px] text-[#979797] font-medium text-[14px]"
									/>
								</div>
							</div>

							<div className="form-group-long">
								<label className="block text-[20px] text-textdark font-[500] mb-[10px]">
									Country
								</label>
								<input
									type="text"
									name="country"
									value={formData.country}
									onChange={handleInputChange}
									placeholder="Country"
									className="border border-textdark px-[15px] py-[15px] w-full rounded-[10px] text-[#979797] font-medium text-[14px]"
								/>
							</div>
						</form>
					</div>

					{/* Order section */}
					<div className="w-full min-[769px]:w-[499px] max-w-full px-[10px] pt-[20px] min-[769px]:pt-[70px] pb-[40px]">
						<div className="flex flex-col max-w-full bg-lightbg px-[20px] py-[27px] rounded-[7px] mb-[8px] shadow-[inset_0.2px_0_5px_0_rgba(0,0,0,0.25)]">
							<p className="text-textdark font-bold text-[20px]">Your Order</p>

							<div className="flex justify-between py-[20px] gap-[20px] border-b border-textdark">
								<p className="text-textdark text-[18px] font-bold">Product</p>
								<p className="text-textdark text-[18px] font-bold">Total</p>
							</div>

							<div className="flex justify-between border-b border-textdark py-[20px] gap-[20px]">
								<p className="text-textdark text-[18px] font-[500]">
									FRIDHULT X 2
								</p>
								<p className="text-textdark">IDR6.990.000</p>
							</div>

							<div className="flex justify-between pt-[20px] gap-[20px]">
								<p className="text-textdark">Tax</p>
								<p className="text-textdark">IDR768.900 (11%)</p>
							</div>

							<div className="flex justify-between pt-[20px] gap-[20px]">
								<p className="text-textdark">Shipping</p>
								<p className="text-textdark">Free Shipping</p>
							</div>

							<div className="flex justify-between pt-[20px] gap-[20px]">
								<p className="font-bold text-[18px] text-textdark">Total</p>
								<p className="font-bold text-[18px] text-textdark">
									IDR7.758.900
								</p>
							</div>

							<div className="py-[20px]">
								<div className="pt-[10px] flex items-center gap-[5px]">
									<input
										type="radio"
										id="bank"
										name="payment"
										checked={paymentMethod === "bank"}
										onChange={() => handlePaymentChange("bank")}
									/>
									<label htmlFor="bank" className="text-textdark font-medium">
										Direct Bank Transfer
									</label>
								</div>

								<div className="pt-[10px] flex items-center gap-[5px]">
									<input
										type="radio"
										id="check"
										name="payment"
										checked={paymentMethod === "check"}
										onChange={() => handlePaymentChange("check")}
									/>
									<label htmlFor="check" className="text-textdark font-medium">
										Check Payments
									</label>
								</div>

								<div className="pt-[10px] flex items-center gap-[5px]">
									<input
										type="radio"
										id="paypal"
										name="payment"
										checked={paymentMethod === "paypal"}
										onChange={() => handlePaymentChange("paypal")}
									/>
									<label htmlFor="paypal" className="text-textdark font-medium">
										Paypal
									</label>
								</div>
							</div>
						</div>

						<button
							type="button"
							className="mt-5 bg-primary text-white w-full p-4 rounded-[10px] text-sm font-semibold uppercase border-none cursor-pointer"
							onClick={handlePaymentClick}
						>
							PROCEED TO PAYMENT
						</button>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
