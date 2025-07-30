import {
	Product,
	ProductService,
	ProductFilters,
	ProductSortOptions,
	PaginationOptions,
	ProductQueryResult,
	ProductAnalytics,
} from "../types/product";
import { bigDataGenerator } from "../utils/bigDataGenerator";

export class BigDataProductService implements ProductService {
	private products: Product[] = [];
	private isInitialized = false;

	constructor() {
		this.initializeBigData();
	}

	private initializeBigData(): void {
		this.products = bigDataGenerator.generateBigDataset(1500);
		this.isInitialized = true;
	}

	private delay(ms: number): Promise<void> {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	// Advanced filtering with Big Data techniques
	private filterProducts(
		products: Product[],
		filters?: ProductFilters
	): Product[] {
		if (!filters) {
			return products;
		}

		return products.filter((product) => {
			// Category filter
			if (
				filters.category &&
				filters.category !== "all" &&
				product.category !== filters.category
			) {
				return false;
			}

			// Subcategory filter
			if (filters.subcategory && product.subcategory !== filters.subcategory) {
				return false;
			}

			// Brand filter
			if (filters.brand && product.brand !== filters.brand) {
				return false;
			}

			// Price range filter
			if (filters.minPrice && product.price < filters.minPrice) {
				return false;
			}
			if (filters.maxPrice && product.price > filters.maxPrice) {
				return false;
			}

			// Rating filter
			if (filters.minRating && product.rating < filters.minRating) {
				return false;
			}

			// Stock filter
			if (
				filters.inStock !== undefined &&
				product.inStock !== filters.inStock
			) {
				return false;
			}

			// Search filter - case insensitive, multiple fields
			if (filters.search) {
				const searchLower = filters.search.toLowerCase();
				const searchFields = [
					product.name,
					product.brand,
					product.description,
					product.category,
					product.subcategory,
					...product.tags,
					...product.material,
					...product.colors,
				]
					.join(" ")
					.toLowerCase();

				if (!searchFields.includes(searchLower)) {
					return false;
				}
			}

			// Tags filter
			if (filters.tags && filters.tags.length > 0) {
				const hasMatchingTag = filters.tags.some((tag) =>
					product.tags.some((productTag) =>
						productTag.toLowerCase().includes(tag.toLowerCase())
					)
				);
				if (!hasMatchingTag) {
					return false;
				}
			}

			// Materials filter
			if (filters.materials && filters.materials.length > 0) {
				const hasMatchingMaterial = filters.materials.some((material) =>
					product.material.some((productMaterial) =>
						productMaterial.toLowerCase().includes(material.toLowerCase())
					)
				);
				if (!hasMatchingMaterial) {
					return false;
				}
			}

			// Colors filter
			if (filters.colors && filters.colors.length > 0) {
				const hasMatchingColor = filters.colors.some((color) =>
					product.colors.some((productColor) =>
						productColor.toLowerCase().includes(color.toLowerCase())
					)
				);
				if (!hasMatchingColor) {
					return false;
				}
			}

			return true;
		});
	}

	private sortProducts(
		products: Product[],
		sort?: ProductSortOptions
	): Product[] {
		if (!sort) {
			return products;
		}

		// Make a mutable copy to sort
		const sortedProducts = [...products];

		sortedProducts.sort((a, b) => {
			const field = sort.field as keyof Product;

			const aValue = a[field];
			const bValue = b[field];

			if (typeof aValue === "string" && typeof bValue === "string") {
				return sort.direction === "asc"
					? aValue.localeCompare(bValue)
					: bValue.localeCompare(aValue);
			}

			if (typeof aValue === "number" && typeof bValue === "number") {
				return sort.direction === "asc" ? aValue - bValue : bValue - aValue;
			}

			return 0;
		});

		return sortedProducts;
	}

	// Efficient pagination for Big Data
	private paginateProducts(
		products: Product[],
		pagination?: PaginationOptions
	): ProductQueryResult {
		const page = pagination?.page || 1;
		const limit = pagination?.limit || 20;
		const total = products.length;
		const totalPages = Math.ceil(total / limit);
		const startIndex = (page - 1) * limit;
		const endIndex = startIndex + limit;
		const paginatedProducts = products.slice(startIndex, endIndex);

		return {
			products: paginatedProducts,
			total,
			page,
			totalPages,
			hasNext: page < totalPages,
			hasPrev: page > 1,
		};
	}

	async getAllProducts(
		filters?: ProductFilters,
		sort?: ProductSortOptions,
		pagination?: PaginationOptions
	): Promise<ProductQueryResult> {
		await this.delay(150);

		if (Math.random() > 0.995) {
			throw new Error("Big Data Service temporarily overloaded");
		}

		const filteredProducts = this.filterProducts(this.products, filters);

		let finalProducts;
		const isAllCategories = !filters?.category || filters.category === "all";

		if (isAllCategories) {
			// Special logic: Pin FRIDHULT to the top only for "All Categories"
			const fridhultProduct = filteredProducts.find((p) => p.id === "1");
			const otherProducts = filteredProducts.filter((p) => p.id !== "1");

			const sortedOtherProducts = this.sortProducts(otherProducts, sort);

			// Prepend FRIDHULT if it exists in the filtered list
			finalProducts = fridhultProduct
				? [fridhultProduct, ...sortedOtherProducts]
				: sortedOtherProducts;
		} else {
			// For specific categories, just sort normally
			finalProducts = this.sortProducts(filteredProducts, sort);
		}

		return this.paginateProducts(finalProducts, pagination);
	}

	async getProductById(id: string): Promise<Product | null> {
		await this.delay(50);

		const product = this.products.find((p) => p.id === id);
		if (product) {
			// Increment views for analytics
			product.views += 1;
		}
		return product || null;
	}

	async getProductsByCategory(
		category: string,
		pagination?: PaginationOptions
	): Promise<ProductQueryResult> {
		const filters: ProductFilters = { category };
		return this.getAllProducts(filters, undefined, pagination);
	}

	async searchProducts(
		query: string,
		filters?: ProductFilters,
		pagination?: PaginationOptions
	): Promise<ProductQueryResult> {
		const searchFilters: ProductFilters = { ...filters, search: query };
		return this.getAllProducts(searchFilters, undefined, pagination);
	}

	async getProductAnalytics(
		filters?: ProductFilters
	): Promise<ProductAnalytics> {
		await this.delay(200); // Analytics processing delay

		const filteredProducts = this.filterProducts(this.products, filters);

		const analytics: ProductAnalytics = {
			totalProducts: filteredProducts.length,
			categoriesCount: {},
			brandsCount: {},
			averagePrice: 0,
			priceRange: { min: Infinity, max: 0 },
			averageRating: 0,
			totalSales: 0,
			stockStatus: { inStock: 0, outOfStock: 0 },
		};

		if (filteredProducts.length === 0) {
			return analytics;
		}

		let totalPrice = 0;
		let totalRating = 0;

		filteredProducts.forEach((product) => {
			// Categories count
			analytics.categoriesCount[product.category] =
				(analytics.categoriesCount[product.category] || 0) + 1;

			// Brands count
			analytics.brandsCount[product.brand] =
				(analytics.brandsCount[product.brand] || 0) + 1;

			// Price analytics
			totalPrice += product.price;
			analytics.priceRange.min = Math.min(
				analytics.priceRange.min,
				product.price
			);
			analytics.priceRange.max = Math.max(
				analytics.priceRange.max,
				product.price
			);

			// Rating
			totalRating += product.rating;

			// Sales
			analytics.totalSales += product.sales;

			// Stock status
			if (product.inStock) {
				analytics.stockStatus.inStock++;
			} else {
				analytics.stockStatus.outOfStock++;
			}
		});

		analytics.averagePrice = Math.round(totalPrice / filteredProducts.length);
		analytics.averageRating =
			Math.round((totalRating / filteredProducts.length) * 10) / 10;

		return analytics;
	}

	async getCategories(): Promise<string[]> {
		await this.delay(50);
		const categories = [...new Set(this.products.map((p) => p.category))];
		return categories.sort();
	}

	async getBrands(): Promise<string[]> {
		await this.delay(50);
		const brands = [...new Set(this.products.map((p) => p.brand))];
		return brands.sort();
	}

	async getTags(): Promise<string[]> {
		await this.delay(50);
		const allTags = this.products.flatMap((p) => p.tags);
		const uniqueTags = [...new Set(allTags)];
		return uniqueTags.sort();
	}

	// Big Data utility methods
	getDatasetSize(): number {
		return this.products.length;
	}

	getMemoryUsage(): string {
		const sizeInBytes = JSON.stringify(this.products).length;
		const sizeInMB = (sizeInBytes / (1024 * 1024)).toFixed(2);
		return `${sizeInMB} MB`;
	}
}

// Service instance - Singleton pattern for Big Data
export const bigDataProductService = new BigDataProductService();
