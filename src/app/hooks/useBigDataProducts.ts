import { useState, useEffect, useCallback } from "react";
import {
	Product,
	ProductFilters,
	ProductSortOptions,
	PaginationOptions,
	ProductQueryResult,
	ProductAnalytics,
} from "../types/product";
import { bigDataProductService } from "../services/bigDataProductService";

interface UseBigDataProductsResult {
	// Data states
	products: Product[];
	total: number;
	currentPage: number;
	totalPages: number;
	hasNext: boolean;
	hasPrev: boolean;

	// Loading & error states
	loading: boolean;
	error: string | null;

	// Actions
	refetch: () => void;
	nextPage: () => void;
	prevPage: () => void;
	goToPage: (page: number) => void;

	// Big Data specific
	analytics: ProductAnalytics | null;
	analyticsLoading: boolean;
	datasetSize: number;
	memoryUsage: string;
}

export const useBigDataProducts = (
	filters?: ProductFilters,
	sort?: ProductSortOptions,
	pageSize: number = 20
): UseBigDataProductsResult => {
	// State management
	const [result, setResult] = useState<ProductQueryResult>({
		products: [],
		total: 0,
		page: 1,
		totalPages: 0,
		hasNext: false,
		hasPrev: false,
	});

	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [analytics, setAnalytics] = useState<ProductAnalytics | null>(null);
	const [analyticsLoading, setAnalyticsLoading] = useState<boolean>(false);
	const [datasetSize, setDatasetSize] = useState<number>(0);
	const [memoryUsage, setMemoryUsage] = useState<string>("0 MB");

	// Fetch products with Big Data processing and retry mechanism
	const fetchProducts = useCallback(
		async (page: number = 1, retryCount: number = 0) => {
			setLoading(true);
			setError(null);

			try {
				console.log(`🔍 Big Data Query - Page ${page}, Filters:`, filters);

				const pagination: PaginationOptions = { page, limit: pageSize };
				const data = await bigDataProductService.getAllProducts(
					filters,
					sort,
					pagination
				);

				setResult(data);

				// Update dataset info
				setDatasetSize(bigDataProductService.getDatasetSize());
				setMemoryUsage(bigDataProductService.getMemoryUsage());

				console.log(
					`✅ Big Data Results: ${data.products.length}/${data.total} products loaded`
				);
			} catch (err) {
				const errorMessage =
					err instanceof Error
						? err.message
						: "Failed to fetch big data products";

				// Auto-retry once if service is overloaded
				if (errorMessage.includes("overloaded") && retryCount < 1) {
					console.log("🔄 Retrying Big Data request...");
					setTimeout(() => fetchProducts(page, retryCount + 1), 1000);
					return;
				}

				setError(errorMessage);
				console.error("Big Data Service Error:", errorMessage);
			} finally {
				setLoading(false);
			}
		},
		[filters, sort, pageSize]
	);

	// Fetch analytics separately for performance
	const fetchAnalytics = useCallback(async () => {
		setAnalyticsLoading(true);

		try {
			console.log("📊 Fetching Big Data Analytics...");
			const analyticsData = await bigDataProductService.getProductAnalytics(
				filters
			);
			setAnalytics(analyticsData);
			console.log("✅ Analytics loaded:", analyticsData);
		} catch (err) {
			console.error("Analytics Error:", err);
		} finally {
			setAnalyticsLoading(false);
		}
	}, [filters]);

	// Effect for initial load and filter changes
	useEffect(() => {
		fetchProducts(1);
		fetchAnalytics();
	}, [fetchProducts, fetchAnalytics]);

	// Navigation functions
	const nextPage = useCallback(() => {
		if (result.hasNext) {
			fetchProducts(result.page + 1);
		}
	}, [result.hasNext, result.page, fetchProducts]);

	const prevPage = useCallback(() => {
		if (result.hasPrev) {
			fetchProducts(result.page - 1);
		}
	}, [result.hasPrev, result.page, fetchProducts]);

	const goToPage = useCallback(
		(page: number) => {
			if (page >= 1 && page <= result.totalPages) {
				fetchProducts(page);
			}
		},
		[result.totalPages, fetchProducts]
	);

	const refetch = useCallback(() => {
		fetchProducts(result.page);
		fetchAnalytics();
	}, [result.page, fetchProducts, fetchAnalytics]);

	return {
		// Data
		products: result.products,
		total: result.total,
		currentPage: result.page,
		totalPages: result.totalPages,
		hasNext: result.hasNext,
		hasPrev: result.hasPrev,

		// States
		loading,
		error,

		// Actions
		refetch,
		nextPage,
		prevPage,
		goToPage,

		// Big Data specific
		analytics,
		analyticsLoading,
		datasetSize,
		memoryUsage,
	};
};

// Hook for search functionality
export const useBigDataSearch = (pageSize: number = 20) => {
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [searchFilters, setSearchFilters] = useState<ProductFilters>({});
	const [searchLoading, setSearchLoading] = useState<boolean>(false);
	const [searchResults, setSearchResults] = useState<ProductQueryResult>({
		products: [],
		total: 0,
		page: 1,
		totalPages: 0,
		hasNext: false,
		hasPrev: false,
	});

	const performSearch = useCallback(
		async (query: string, filters?: ProductFilters, page: number = 1) => {
			if (!query.trim()) return;

			setSearchLoading(true);

			try {
				console.log(`🔍 Big Data Search: "${query}"`);

				const pagination: PaginationOptions = { page, limit: pageSize };
				const results = await bigDataProductService.searchProducts(
					query,
					filters,
					pagination
				);

				setSearchResults(results);
				setSearchQuery(query);
				setSearchFilters(filters || {});

				console.log(
					`✅ Search Results: ${results.products.length}/${results.total} found`
				);
			} catch (err) {
				console.error("Search Error:", err);
			} finally {
				setSearchLoading(false);
			}
		},
		[pageSize]
	);

	return {
		searchQuery,
		searchResults,
		searchLoading,
		performSearch,
		setSearchQuery,
	};
};
