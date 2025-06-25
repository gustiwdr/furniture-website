import React from "react";

const ServiceSection: React.FC = () => {
	return (
		<div className="bg-lightbg grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
			<div className="flex items-center gap-3 justify-center">
				<div>
					<i className="fas fa-truck text-3xl text-textdark"></i>
				</div>
				<div className="text-textdark">
					<p className="font-semibold text-base md:text-xl">Free Delivery</p>
					<p className="text-sm">Lorem ipsum dolor sit amet.</p>
				</div>
			</div>
			<div className="flex items-center gap-3 justify-center">
				<div>
					<i className="far fa-clock text-3xl text-textdark"></i>
				</div>
				<div className="text-textdark">
					<p className="font-semibold text-base md:text-xl">Support 24/7</p>
					<p className="text-sm">Lorem ipsum dolor sit amet.</p>
				</div>
			</div>
			<div className="flex items-center gap-3 justify-center">
				<div>
					<i className="fas fa-thumbs-up text-3xl text-textdark"></i>
				</div>
				<div className="text-textdark">
					<p className="font-semibold text-base md:text-xl">100% Authentic</p>
					<p className="text-sm">Lorem ipsum dolor sit amet.</p>
				</div>
			</div>
		</div>
	);
};

export default ServiceSection;
