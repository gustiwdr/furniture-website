import Image from "next/image";

const Footer = () => {
	return (
		<footer className="bg-primary px-4 py-8 sm:px-8 md:px-16 lg:px-24 xl:px-[150px] text-[#ffffff]">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[30px]">
				<div className="footer-content">
					<p className="py-4 md:py-[20px] font-bold text-xl">Furniture</p>
					<p className="leading-6 md:leading-[30px] text-sm md:text-base">
						Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
						enim ad minim veniam, quis nostrud exercitation ullamco laboris.
					</p>
					<p className="py-4 md:py-[20px] font-bold text-lg">Follow Us</p>
				</div>
				<div className="flex flex-col justify-center font-bold gap-4 md:gap-[20px]">
					<p className="text-lg md:text-xl">Instagram Shop</p>
					<img
						className="h-auto w-full max-w-[500px]"
						src="/images/instagram-shop.png"
						alt="instagram shop"
					/>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
