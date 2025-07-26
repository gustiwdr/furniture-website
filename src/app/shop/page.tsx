"use client";

import { useState } from "react";
import { useBigDataProducts } from "../hooks/useBigDataProducts";
import { ProductFilters, ProductSortOptions } from "../types/product";
import ProductCard from "../components/ProductCard";
import Navigator from "../components/Navigator";
import Footer from "../components/Footer";

const ITEMS_PER_PAGE = 16;

const categories = [
	{ id: "all", name: "All Products" },
	{ id: "living", name: "Living Room" },
	{ id: "bedroom", name: "Bedroom" },
	{ id: "dining", name: "Dining Room" },
	{ id: "office", name: "Office" },
	{ id: "outdoor", name: "Outdoor" },
	{ id: "kitchen", name: "Kitchen" },
	{ id: "bathroom", name: "Bathroom" },
];

const sortOptions = [
	{
		value: "name-asc",
		label: "Name A-Z",
		field: "name" as const,
		direction: "asc" as const,
	},
	{
		value: "name-desc",
		label: "Name Z-A",
		field: "name" as const,
		direction: "desc" as const,
	},
	{
		value: "price-asc",
		label: "Price Low-High",
		field: "price" as const,
		direction: "asc" as const,
	},
	{
		value: "price-desc",
		label: "Price High-Low",
		field: "price" as const,
		direction: "desc" as const,
	},
	{
		value: "rating-desc",
		label: "Highest Rated",
		field: "rating" as const,
		direction: "desc" as const,
	},
	{
		value: "sales-desc",
		label: "Best Seller",
		field: "sales" as const,
		direction: "desc" as const,
	},
];

export default function Shop() {
	const [filters, setFilters] = useState<ProductFilters>({});
	const [sort, setSort] = useState<ProductSortOptions>({
		field: "name",
		direction: "asc",
	});
	const [searchQuery, setSearchQuery] = useState("");

	// Big Data Products Hook with Pagination
	const {
		products,
		total,
		currentPage,
		totalPages,
		hasNext,
		hasPrev,
		loading,
		error,
		refetch,
		nextPage,
		prevPage,
		goToPage,
	} = useBigDataProducts(filters, sort, ITEMS_PER_PAGE);

	const handleCategoryClick = (categoryId: string): void => {
		setFilters({
			...filters,
			category: categoryId === "all" ? undefined : categoryId,
		});
	};

	const handleSortChange = (sortValue: string) => {
		const sortOption = sortOptions.find((opt) => opt.value === sortValue);
		if (sortOption) {
			setSort({ field: sortOption.field, direction: sortOption.direction });
		}
	};

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		setFilters({ ...filters, search: searchQuery || undefined });
	};

	const clearSearch = () => {
		setSearchQuery("");
		setFilters({ ...filters, search: undefined });
	};

	const formatPrice = (price: number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
			minimumFractionDigits: 0,
		}).format(price);
	};

	// Generate page numbers for pagination
	const getPageNumbers = () => {
		const pages = [];
		const maxPagesToShow = 5;
		let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
		let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

		if (endPage - startPage + 1 < maxPagesToShow) {
			startPage = Math.max(1, endPage - maxPagesToShow + 1);
		}

		for (let i = startPage; i <= endPage; i++) {
			pages.push(i);
		}
		return pages;
	};

	return (
		<div className="font-montserrat bg-white">
			<Navigator activePage="shop" />

			{/* Search Bar */}
			<div className="max-w-4xl mx-auto pt-20 px-4">
				<form onSubmit={handleSearch} className="mb-6">
					<div className="relative">
						<input
							type="text"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							placeholder="Search furniture products..."
							className="w-full px-4 py-3 pr-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
						/>
						{searchQuery && (
							<button
								type="button"
								onClick={clearSearch}
								className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
							>
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						)}
						<button
							type="submit"
							className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors"
						>
							Search
						</button>
					</div>
				</form>
			</div>

			{/* Filters & Sort */}
			<div className="max-w-full px-[30px] md:px-[50px] py-6 bg-lightbg">
				<div className="flex flex-wrap justify-between items-center gap-4">
					{/* Results Info */}
					<div className="text-sm text-gray-600">
						Showing {products.length} of {total.toLocaleString()} results
						{filters.search && ` for "${filters.search}"`}
					</div>

					{/* Filters */}
					<div className="flex items-center gap-4">
						{/* Category Dropdown */}
						<div className="flex items-center gap-2">
							<label className="text-sm font-medium text-textdark">
								Category:
							</label>
							<select
								value={filters.category || "all"}
								onChange={(e) => handleCategoryClick(e.target.value)}
								className="px-4 py-2.5 pr-10 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none cursor-pointer min-w-[140px]"
								style={{
									backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
									backgroundPosition: "right 8px center",
									backgroundRepeat: "no-repeat",
									backgroundSize: "16px",
								}}
							>
								{categories.map((category) => (
									<option key={category.id} value={category.id}>
										{category.name}
									</option>
								))}
							</select>
						</div>

						{/* Sort Dropdown */}
						<div className="flex items-center gap-2">
							<label className="text-sm font-medium text-textdark">
								Sort by:
							</label>
							<select
								value={`${sort.field}-${sort.direction}`}
								onChange={(e) => handleSortChange(e.target.value)}
								className="px-4 py-2.5 pr-10 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none cursor-pointer min-w-[140px]"
								style={{
									backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
									backgroundPosition: "right 8px center",
									backgroundRepeat: "no-repeat",
									backgroundSize: "16px",
								}}
							>
								{sortOptions.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<main>
				<div className="flex">
					{/* Loading State */}
					{loading && (
						<div className="w-full text-center py-12">
							<div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
							<p className="mt-4 text-gray-600">Loading products...</p>
						</div>
					)}

					{/* Error State */}
					{error && (
						<div className="w-full text-center py-12">
							<p className="text-red-600 mb-4">{error}</p>
							<button
								onClick={refetch}
								className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
							>
								Try Again
							</button>
						</div>
					)}

					{/* Products Grid */}
					{!loading && !error && (
						<div className="w-full">
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-12 px-[30px] md:px-[50px] max-w-full overflow-x-hidden">
								{products.map((product) => (
									<ProductCard
										key={product.id}
										{...product}
										price={formatPrice(product.price)}
										onAddToCart={(id) => console.log("Add to cart:", id)}
										onToggleFavorite={(id) =>
											console.log("Toggle favorite:", id)
										}
									/>
								))}
							</div>

							{/* Pagination */}
							{totalPages > 1 && (
								<div className="py-8 px-[30px] md:px-[50px]">
									<div className="flex justify-center items-center space-x-2 mb-4">
										{/* Previous Button */}
										<button
											onClick={prevPage}
											disabled={!hasPrev}
											className={`px-4 py-2 rounded ${
												hasPrev
													? "bg-primary text-white hover:bg-blue-700"
													: "bg-gray-300 text-gray-500 cursor-not-allowed"
											} transition-colors`}
										>
											Previous
										</button>

										{/* Page Numbers */}
										{getPageNumbers().map((pageNum) => (
											<button
												key={pageNum}
												onClick={() => goToPage(pageNum)}
												className={`px-3 py-2 rounded ${
													pageNum === currentPage
														? "bg-primary text-white"
														: "bg-gray-200 text-gray-700 hover:bg-gray-300"
												} transition-colors`}
											>
												{pageNum}
											</button>
										))}

										{/* Next Button */}
										<button
											onClick={nextPage}
											disabled={!hasNext}
											className={`px-4 py-2 rounded ${
												hasNext
													? "bg-primary text-white hover:bg-blue-700"
													: "bg-gray-300 text-gray-500 cursor-not-allowed"
											} transition-colors`}
										>
											Next
										</button>
									</div>

									{/* Pagination Info */}
									<div className="text-center text-sm text-gray-600">
										Page {currentPage} of {totalPages} •{" "}
										{total.toLocaleString()} total items
									</div>
								</div>
							)}
						</div>
					)}

					{/* Empty State */}
					{!loading && !error && products.length === 0 && (
						<div className="w-full text-center py-12">
							<p className="text-gray-600">
								No products found in this category.
							</p>
						</div>
					)}
				</div>
			</main>

			<Footer />
		</div>
	);
}
