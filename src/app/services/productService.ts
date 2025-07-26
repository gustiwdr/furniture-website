import { Product } from "../types/product";

// Legacy Product interface untuk backward compatibility
interface LegacyProduct {
	id: string;
	name: string;
	image: string;
	price: string; // Keep as string for legacy compatibility
	reviewCount: number;
	category?: string;
}

// Legacy Service interface
interface LegacyProductService {
	getAllProducts(): Promise<LegacyProduct[]>;
	getProductById(id: string): Promise<LegacyProduct | null>;
	getProductsByCategory(category: string): Promise<LegacyProduct[]>;
}

// Mock data - dalam aplikasi nyata ini akan diganti dengan API call
const mockLegacyProducts: LegacyProduct[] = [
	{
		id: "1",
		name: "FRIDHULT",
		image: "/images/product1.png",
		price: "IDR 1.495.000",
		reviewCount: 24,
		category: "living",
	},
	{
		id: "2",
		name: "IVÖSJÖN",
		image: "/images/product2.png",
		price: "IDR 449.000",
		reviewCount: 36,
		category: "bedroom",
	},
	{
		id: "3",
		name: "TRONES",
		image: "/images/product3.png",
		price: "IDR 3.495.000",
		reviewCount: 42,
		category: "office",
	},
	{
		id: "4",
		name: "OFTAST",
		image: "/images/product4.png",
		price: "IDR 9.900",
		reviewCount: 18,
		category: "dining",
	},
	{
		id: "5",
		name: "LYCKSELE HÅVET",
		image: "/images/product5.png",
		price: "IDR 4.795.000",
		reviewCount: 36,
		category: "living",
	},
	{
		id: "6",
		name: "LACK",
		image: "/images/product6.png",
		price: "IDR 199.000",
		reviewCount: 36,
		category: "living",
	},
	{
		id: "7",
		name: "HEMNES",
		image: "/images/product7.png",
		price: "IDR 1.799.000",
		reviewCount: 28,
		category: "bedroom",
	},
	{
		id: "8",
		name: "BILLY",
		image: "/images/product8.png",
		price: "IDR 699.000",
		reviewCount: 45,
		category: "office",
	},
	{
		id: "9",
		name: "KALLAX",
		image: "/images/product9.png",
		price: "IDR 899.000",
		reviewCount: 32,
		category: "living",
	},
	{
		id: "10",
		name: "LISABO",
		image: "/images/product10.png",
		price: "IDR 2.495.000",
		reviewCount: 21,
		category: "dining",
	},
	{
		id: "11",
		name: "RÅSKOG",
		image: "/images/product11.png",
		price: "IDR 499.000",
		reviewCount: 14,
		category: "office",
	},
	{
		id: "12",
		name: "RISHOLMEN",
		image: "/images/product12.png",
		price: "IDR 3.455.000",
		reviewCount: 56,
		category: "living",
	},
];

// Service implementation - mensimulasikan REST API (Legacy Version)
export class ProductServiceImpl implements LegacyProductService {
	// Simulasi API delay
	private delay(ms: number): Promise<void> {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	async getAllProducts(): Promise<LegacyProduct[]> {
		// Simulasi network delay
		await this.delay(100);

		// Simulasi kemungkinan error (untuk testing error handling)
		if (Math.random() > 0.95) {
			throw new Error("Service temporarily unavailable");
		}

		return [...mockLegacyProducts];
	}

	async getProductById(id: string): Promise<LegacyProduct | null> {
		await this.delay(50);

		const product = mockLegacyProducts.find((p) => p.id === id);
		return product || null;
	}

	async getProductsByCategory(category: string): Promise<LegacyProduct[]> {
		await this.delay(100);

		if (category === "all") {
			return [...mockLegacyProducts];
		}

		return mockLegacyProducts.filter((p) => p.category === category);
	}
}

// Service instance - dalam aplikasi nyata bisa menggunakan dependency injection
export const productService = new ProductServiceImpl();
