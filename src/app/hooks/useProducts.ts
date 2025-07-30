import { useState, useEffect } from "react";
import { productService } from "../services/productService";

interface LegacyProduct {
	id: string;
	name: string;
	image: string;
	price: string;
	reviewCount: number;
	category?: string;
}

interface UseProductsResult {
	products: LegacyProduct[];
	loading: boolean;
	error: string | null;
	refetch: () => void;
}

export const useProducts = (category: string = "all"): UseProductsResult => {
	const [products, setProducts] = useState<LegacyProduct[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const fetchProducts = async () => {
		setLoading(true);
		setError(null);

		try {
			const data = await productService.getProductsByCategory(category);
			setProducts(data);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to fetch products");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchProducts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [category]);

	return {
		products,
		loading,
		error,
		refetch: fetchProducts,
	};
};
