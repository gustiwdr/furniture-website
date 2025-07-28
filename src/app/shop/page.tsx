"use client";

import { useState, useMemo, Suspense } from "react";
import dynamic from "next/dynamic";
import { useBigDataProducts } from "../hooks/useBigDataProducts";
import { ProductFilters, ProductSortOptions } from "../types/product";
import Navigator from "../components/Navigator";

// Dynamic imports untuk mengurangi initial bundle
const ProductCard = dynamic(() => import("../components/ProductCard"), {
	loading: () => (
		<div className="animate-pulse bg-gray-200 rounded-lg min-h-[420px] flex flex-col">
			<div className="h-64 bg-gray-300 rounded-t-lg"></div>
			<div className="p-4 flex-1 space-y-3">
				<div className="h-4 bg-gray-300 rounded w-3/4"></div>
				<div className="h-3 bg-gray-300 rounded w-1/2"></div>
				<div className="h-4 bg-gray-300 rounded w-1/4"></div>
			</div>
		</div>
	),
});

const Footer = dynamic(() => import("../components/Footer"), {
	ssr: false,
});

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

	// Generate page numbers for pagination - memoized untuk performance
	const getPageNumbers = useMemo(() => {
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
	}, [currentPage, totalPages]);

	return (
		<div className="font-montserrat bg-white">
			<Navigator activePage="shop" />

			{/* Search Bar */}
			<section
				className="max-w-4xl mx-auto pt-20 px-4"
				aria-label="Product Search"
			>
				<form onSubmit={handleSearch} className="mb-6" role="search">
					<div className="relative">
						<label htmlFor="product-search" className="sr-only">
							Search furniture products
						</label>
						<input
							id="product-search"
							type="text"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							placeholder="Search furniture products..."
							aria-describedby="search-help"
							className="w-full px-4 py-3 pr-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
						/>
						<span id="search-help" className="sr-only">
							Enter keywords to search for furniture products
						</span>
						{searchQuery && (
							<button
								type="button"
								onClick={clearSearch}
								aria-label="Clear search"
								className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
							>
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
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
							aria-label="Search products"
							className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
						>
							Search
						</button>
					</div>
				</form>
			</section>

			{/* Filters & Sort */}
			<section
				className="max-w-full px-4 md:px-[50px] py-6 bg-primary"
				aria-label="Product filters and sorting"
			>
				<div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-4">
					{/* Results Info */}
					<div
						className="text-sm text-white w-full md:w-auto text-center md:text-left"
						role="status"
						aria-live="polite"
					>
						Showing {products.length} of {total.toLocaleString()} results
						{filters.search && ` for "${filters.search}"`}
					</div>

					{/* Filters Container */}
					<div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
						{/* Category Dropdown */}
						<div className="flex items-center gap-2 w-full sm:w-auto">
							<label
								htmlFor="category-select"
								className="text-sm font-medium text-white flex-shrink-0"
							>
								Category:
							</label>
							<select
								id="category-select"
								value={filters.category || "all"}
								onChange={(e) => handleCategoryClick(e.target.value)}
								aria-label="Filter products by category"
								className="w-full sm:w-48 px-4 py-2.5 pr-10 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent appearance-none cursor-pointer"
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
						<div className="flex items-center gap-2 w-full sm:w-auto">
							<label
								htmlFor="sort-select"
								className="text-sm font-medium text-white flex-shrink-0"
							>
								Sort by:
							</label>
							<select
								id="sort-select"
								value={`${sort.field}-${sort.direction}`}
								onChange={(e) => handleSortChange(e.target.value)}
								aria-label="Sort products by different criteria"
								className="w-full sm:w-48 px-4 py-2.5 pr-10 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent appearance-none cursor-pointer"
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
			</section>

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
						<div className="w-full text-center py-12" role="alert">
							<p className="text-red-600 mb-4">{error}</p>
							<button
								onClick={refetch}
								aria-label="Retry loading products"
								className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
							>
								Try Again
							</button>
						</div>
					)}

					{/* Products Grid */}
					{!loading && !error && (
						<div className="w-full">
							<section
								aria-label="Product listing"
								className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12 px-4 md:px-[50px] max-w-full overflow-x-hidden"
								style={{
									minHeight: "1680px", // Prevent layout shift for 16 items * 420px + gaps
									gridTemplateRows: "repeat(auto-fit, minmax(420px, 1fr))",
								}}
							>
								{products.map((product) => (
									<div
										key={product.id}
										className="w-full"
										style={{ minHeight: "420px" }}
									>
										<Suspense
											fallback={
												<div className="animate-pulse bg-gray-200 rounded-lg min-h-[420px] flex flex-col">
													<div className="h-64 bg-gray-300 rounded-t-lg"></div>
													<div className="p-4 flex-1 space-y-3">
														<div className="h-4 bg-gray-300 rounded w-3/4"></div>
														<div className="h-3 bg-gray-300 rounded w-1/2"></div>
														<div className="h-4 bg-gray-300 rounded w-1/4"></div>
													</div>
												</div>
											}
										>
											<ProductCard
												{...product}
												price={product.price}
												onAddToCart={(id) => console.log("Add to cart:", id)}
												onToggleFavorite={(id) =>
													console.log("Toggle favorite:", id)
												}
											/>
										</Suspense>
									</div>
								))}
							</section>

							{/* Pagination */}
							{totalPages > 1 && (
								<nav
									aria-label="Product pagination"
									className="py-8 px-4 md:px-[50px]"
								>
									<div className="flex justify-center items-center space-x-1 sm:space-x-2 mb-4">
										{/* Previous Button */}
										<button
											onClick={prevPage}
											disabled={!hasPrev}
											aria-label="Go to previous page"
											className={`px-4 py-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
												hasPrev
													? "bg-primary text-white hover:bg-blue-700"
													: "bg-gray-300 text-gray-500 cursor-not-allowed"
											}`}
										>
											Previous
										</button>

										{/* Page Numbers */}
										{getPageNumbers.map((pageNum: number) => (
											<button
												key={pageNum}
												onClick={() => goToPage(pageNum)}
												aria-label={`Go to page ${pageNum}`}
												aria-current={
													pageNum === currentPage ? "page" : undefined
												}
												className={`px-2 sm:px-3 py-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm sm:text-base ${
													pageNum === currentPage
														? "bg-primary text-white"
														: "bg-gray-200 text-gray-700 hover:bg-gray-300"
												}`}
											>
												{pageNum}
											</button>
										))}

										{/* Next Button */}
										<button
											onClick={nextPage}
											disabled={!hasNext}
											aria-label="Go to next page"
											className={`px-4 py-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
												hasNext
													? "bg-primary text-white hover:bg-blue-700"
													: "bg-gray-300 text-gray-500 cursor-not-allowed"
											}`}
										>
											Next
										</button>
									</div>

									{/* Pagination Info */}
									<div
										className="text-center text-sm text-gray-600"
										aria-live="polite"
									>
										Page {currentPage} of {totalPages} •{" "}
										{total.toLocaleString()} total items
									</div>
								</nav>
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
