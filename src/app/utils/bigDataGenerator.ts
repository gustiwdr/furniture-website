import { Product } from "../types/product";

// Big Data Generator - 1000+ Products untuk mata kuliah Big Data
export class BigDataGenerator {
	private furnitureNames = [
		"FRIDHULT",
		"IVÖSJÖN",
		"TRONES",
		"OFTAST",
		"LYCKSELE HÅVET",
		"LACK",
		"HEMNES",
		"BILLY",
		"KALLAX",
		"LISABO",
		"RÅSKOG",
		"RISHOLMEN",
		"MALM",
		"IKEA PS",
		"EXPEDIT",
		"BESTÅ",
		"EKET",
		"BRIMNES",
		"NORDLI",
		"KOPPANG",
		"STUVA",
		"FLISAT",
		"TROFAST",
		"ALGOT",
		"ELVARLI",
		"BOAXEL",
		"PLATSA",
		"IVAR",
		"HYLLIS",
		"VITTSJÖ",
		"FRIHETEN",
		"KLIPPAN",
		"SÖDERHAMN",
		"VIMLE",
		"LANDSKRONA",
		"KIVIK",
		"GRÖNLID",
		"LIDHULT",
		"NOCKEBY",
		"STOCKSUND",
		"JÄRVFJÄLLET",
		"MARKUS",
		"VOLMAR",
		"ALEFJÄLL",
		"HATTEFJÄLL",
		"LÅNGFJÄLL",
		"RENBERGET",
		"ÖRFJÄLL",
		"BLECKBERGET",
		"FLINTAN",
	];

	private categories = [
		{
			name: "living",
			subcategories: [
				"sofa",
				"coffee-table",
				"tv-stand",
				"bookshelf",
				"armchair",
			],
		},
		{
			name: "bedroom",
			subcategories: ["bed", "wardrobe", "nightstand", "dresser", "mirror"],
		},
		{
			name: "dining",
			subcategories: [
				"dining-table",
				"dining-chair",
				"bar-stool",
				"sideboard",
				"buffet",
			],
		},
		{
			name: "office",
			subcategories: [
				"desk",
				"office-chair",
				"filing-cabinet",
				"bookcase",
				"desk-lamp",
			],
		},
		{
			name: "kitchen",
			subcategories: [
				"kitchen-cabinet",
				"kitchen-island",
				"bar-cart",
				"pantry",
				"spice-rack",
			],
		},
		{
			name: "bathroom",
			subcategories: [
				"vanity",
				"mirror-cabinet",
				"storage-unit",
				"towel-rack",
				"shower-shelf",
			],
		},
		{
			name: "outdoor",
			subcategories: [
				"patio-set",
				"garden-chair",
				"outdoor-table",
				"umbrella",
				"planter",
			],
		},
	];

	private brands = [
		"IKEA",
		"Ashley",
		"Wayfair",
		"West Elm",
		"CB2",
		"Pottery Barn",
		"Crate & Barrel",
		"Article",
		"Floyd",
		"Herman Miller",
	];

	private materials = [
		"Wood",
		"Metal",
		"Glass",
		"Plastic",
		"Fabric",
		"Leather",
		"Bamboo",
		"Rattan",
		"Marble",
		"Ceramic",
	];

	private colors = [
		"White",
		"Black",
		"Brown",
		"Gray",
		"Beige",
		"Blue",
		"Green",
		"Red",
		"Yellow",
		"Natural",
	];

	private tags = [
		"modern",
		"minimalist",
		"scandinavian",
		"industrial",
		"vintage",
		"contemporary",
		"rustic",
		"elegant",
		"compact",
		"luxury",
	];

	private descriptions = [
		"Elegant and functional furniture piece perfect for modern homes",
		"Stylish design meets practical functionality in this premium collection",
		"Contemporary furniture crafted with attention to detail and quality",
		"Minimalist design that complements any interior decoration style",
		"Durable construction with premium materials for long-lasting use",
		"Space-saving solution without compromising on style and comfort",
		"Versatile piece that adapts to various room configurations",
		"Classic design with modern touches for timeless appeal",
		"Ergonomic design prioritizing comfort and user experience",
		"Sustainable materials used in eco-friendly manufacturing process",
	];

	// Generate random number within range
	private randomBetween(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// Generate random date within last 2 years
	private randomDate(): string {
		const start = new Date(2023, 0, 1);
		const end = new Date();
		const randomTime =
			start.getTime() + Math.random() * (end.getTime() - start.getTime());
		return new Date(randomTime).toISOString();
	}

	// Generate single product
	private generateProduct(id: number): Product {
		const category =
			this.categories[Math.floor(Math.random() * this.categories.length)];
		const subcategory =
			category.subcategories[
				Math.floor(Math.random() * category.subcategories.length)
			];
		const baseName =
			this.furnitureNames[
				Math.floor(Math.random() * this.furnitureNames.length)
			];
		const variant = this.randomBetween(1, 100);

		const basePrice = this.randomBetween(50000, 5000000);
		const hasDiscount = Math.random() > 0.7;
		const discount = hasDiscount ? this.randomBetween(10, 50) : 0;
		const price = hasDiscount
			? Math.floor((basePrice * (100 - discount)) / 100)
			: basePrice;

		const rating = Math.round((Math.random() * 2 + 3) * 10) / 10; // 3.0 - 5.0
		const reviewCount = this.randomBetween(1, 200);
		const sales = this.randomBetween(0, 1000);
		const views = sales * this.randomBetween(10, 50);

		const createdAt = this.randomDate();
		const updatedAt = new Date(
			new Date(createdAt).getTime() + Math.random() * 30 * 24 * 60 * 60 * 1000
		).toISOString();

		return {
			id: id.toString(),
			name: `${baseName} ${variant}`,
			image: `/images/product${(id % 12) + 1}.png`,
			price,
			originalPrice: hasDiscount ? basePrice : undefined,
			discount: hasDiscount ? discount : undefined,
			reviewCount,
			rating,
			category: category.name,
			subcategory,
			brand: this.brands[Math.floor(Math.random() * this.brands.length)],
			description:
				this.descriptions[Math.floor(Math.random() * this.descriptions.length)],
			tags: this.tags
				.slice(0, this.randomBetween(2, 5))
				.sort(() => Math.random() - 0.5),
			inStock: Math.random() > 0.1, // 90% in stock
			stockQuantity: this.randomBetween(0, 100),
			weight: this.randomBetween(1, 50),
			dimensions: {
				width: this.randomBetween(30, 200),
				height: this.randomBetween(30, 200),
				depth: this.randomBetween(30, 100),
			},
			material: this.materials
				.slice(0, this.randomBetween(1, 3))
				.sort(() => Math.random() - 0.5),
			colors: this.colors
				.slice(0, this.randomBetween(1, 4))
				.sort(() => Math.random() - 0.5),
			createdAt,
			updatedAt,
			views,
			sales,
		};
	}

	// Generate big dataset - 1500 products
	public generateBigDataset(count: number = 1500): Product[] {
		console.log(`🔥 Generating Big Data: ${count} products...`);
		const products: Product[] = [];

		const fixedFirstProduct: Product = {
			id: "1",
			name: "FRIDHULT",
			description:
				"Comfortable sofa with premium cushioning and modern design. Perfect for living room relaxation and entertaining guests.",
			price: 3495000,
			image: "/images/product1.png",
			category: "living",
			subcategory: "sofa",
			brand: "IKEA",
			rating: 4.8,
			reviewCount: 1234,
			inStock: true,
			stockQuantity: 25,
			material: ["Fabric", "Wood"],
			colors: ["Gray", "Blue", "Beige"],
			dimensions: { width: 200, height: 85, depth: 90 },
			weight: 45,
			tags: ["comfortable", "modern", "living-room", "sofa"],
			sales: 2856,
			views: 45623,
			discount: 0,
			createdAt: "2024-01-01T00:00:00.000Z",
			updatedAt: "2024-12-01T00:00:00.000Z",
		};

		products.push(fixedFirstProduct);

		for (let i = 2; i <= count; i++) {
			products.push(this.generateProduct(i));
		}

		return products;
	}
}

export const bigDataGenerator = new BigDataGenerator();
