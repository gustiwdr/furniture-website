export interface Product {
	id: string;
	name: string;
	image: string;
	price: number;
	originalPrice?: number;
	discount?: number;
	reviewCount: number;
	rating: number;
	category: string;
	subcategory: string;
	brand: string;
	description: string;
	tags: string[];
	inStock: boolean;
	stockQuantity: number;
	weight: number;
	dimensions: {
		width: number;
		height: number;
		depth: number;
	};
	material: string[];
	colors: string[];
	createdAt: string;
	updatedAt: string;
	views: number;
	sales: number;
}

export interface ProductFilters {
	category?: string;
	subcategory?: string;
	brand?: string;
	minPrice?: number;
	maxPrice?: number;
	minRating?: number;
	inStock?: boolean;
	search?: string;
	tags?: string[];
	materials?: string[];
	colors?: string[];
}

export interface ProductSortOptions {
	field: "name" | "price" | "rating" | "reviewCount" | "sales" | "createdAt";
	direction: "asc" | "desc";
}

export interface PaginationOptions {
	page: number;
	limit: number;
}

export interface ProductQueryResult {
	products: Product[];
	total: number;
	page: number;
	totalPages: number;
	hasNext: boolean;
	hasPrev: boolean;
}

export interface ProductAnalytics {
	totalProducts: number;
	categoriesCount: { [key: string]: number };
	brandsCount: { [key: string]: number };
	averagePrice: number;
	priceRange: { min: number; max: number };
	averageRating: number;
	totalSales: number;
	stockStatus: { inStock: number; outOfStock: number };
}

export interface ProductService {
	getAllProducts(
		filters?: ProductFilters,
		sort?: ProductSortOptions,
		pagination?: PaginationOptions
	): Promise<ProductQueryResult>;
	getProductById(id: string): Promise<Product | null>;
	getProductsByCategory(
		category: string,
		pagination?: PaginationOptions
	): Promise<ProductQueryResult>;
	searchProducts(
		query: string,
		filters?: ProductFilters,
		pagination?: PaginationOptions
	): Promise<ProductQueryResult>;
	getProductAnalytics(filters?: ProductFilters): Promise<ProductAnalytics>;
	getCategories(): Promise<string[]>;
	getBrands(): Promise<string[]>;
	getTags(): Promise<string[]>;
}
