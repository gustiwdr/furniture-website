import React from "react";

const ServiceSection: React.FC = () => {
	return (
		<div className="service-section bg-lightbg grid grid-cols-1 md:grid-cols-3 gap-4 p-6 py-8">
			<div className="flex items-center gap-3 justify-center">
				<div>
					{/* Truck Icon */}
					<svg 
						className="w-8 h-8 text-textdark" 
						fill="currentColor" 
						viewBox="0 0 24 24" 
						aria-hidden="true"
					>
						<path d="M19 7h-3V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a3 3 0 0 0 6 0h4a3 3 0 0 0 6 0v-6a1 1 0 0 0-1-1zM6 17a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm10 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm2-3h-.78A3 3 0 0 0 16 13H8a3 3 0 0 0-1.22 1H6V7h10v7z"/>
					</svg>
				</div>
				<div className="text-textdark">
					<p className="font-semibold text-base md:text-xl">Free Delivery</p>
					<p className="text-sm">Lorem ipsum dolor sit amet.</p>
				</div>
			</div>
			<div className="flex items-center gap-3 justify-center">
				<div>
					{/* Clock Icon */}
					<svg 
						className="w-8 h-8 text-textdark" 
						fill="none" 
						stroke="currentColor" 
						viewBox="0 0 24 24" 
						aria-hidden="true"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
				<div className="text-textdark">
					<p className="font-semibold text-base md:text-xl">Support 24/7</p>
					<p className="text-sm">Lorem ipsum dolor sit amet.</p>
				</div>
			</div>
			<div className="flex items-center gap-3 justify-center">
				<div>
					{/* Thumbs Up Icon */}
					<svg 
						className="w-8 h-8 text-textdark" 
						fill="currentColor" 
						viewBox="0 0 24 24" 
						aria-hidden="true"
					>
						<path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.230l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z"/>
					</svg>
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
