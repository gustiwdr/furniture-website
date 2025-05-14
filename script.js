document.addEventListener("DOMContentLoaded", function () {
	// ===== ACTIVE LINK HANDLING =====
	const currentPath = window.location.pathname.split("/").pop();
	const menuLinks = document.querySelectorAll(
		"#mobile-menu a, .middle-section a"
	);

	menuLinks.forEach((link) => {
		const linkPath = link.getAttribute("href");
		if (
			linkPath === currentPath ||
			(currentPath === "" && (linkPath === "#" || linkPath === "index.html"))
		) {
			link.classList.add("text-primary");
		} else {
			link.classList.remove("text-primary");
		}

		link.addEventListener("click", function () {
			// Remove from all
			menuLinks.forEach((l) => l.classList.remove("text-primary"));
			// Add to current
			this.classList.add("text-primary");

			// Hide mobile menu on click
			const mobileMenu = document.getElementById("mobile-menu");
			if (mobileMenu) {
				mobileMenu.classList.add("hidden");
			}
		});
	});

	// ===== ADJUST HERO SECTION HEIGHT =====
	try {
		const header = document.querySelector("header");
		const hero = document.querySelector(".hero-section");

		if (header && hero) {
			const headerHeight = header.offsetHeight;
			hero.style.height = `calc(100vh - ${headerHeight}px)`;
		}
	} catch (error) {
		console.log("Hero section adjustment not applicable for this page");
	}

	// ===== PRODUCT CARD CLICK =====
	try {
		const productCards = document.querySelectorAll(".product-card");
		if (productCards && productCards.length > 0) {
			productCards.forEach((card) => {
				card.addEventListener("click", function () {
					window.location.href = "product-detail.html";
				});
			});
		}
	} catch (error) {
		console.log("Product cards not found on this page");
	}

	// ===== CART BUTTON CLICK =====
	try {
		const addToCartBtn = document.querySelector(".add-to-cart-btn");
		if (addToCartBtn) {
			addToCartBtn.addEventListener("click", function () {
				window.location.href = "cart.html";
			});
		}
	} catch (error) {
		console.log("Add to cart button not found on this page");
	}

	// ===== CHECKOUT BUTTON CLICK =====
	try {
		const checkoutBtn = document.querySelector(".checkout-btn");
		if (checkoutBtn) {
			checkoutBtn.addEventListener("click", function () {
				window.location.href = "billians.html";
			});
		}
	} catch (error) {
		console.log("Checkout button not found on this page");
	}

	// ===== HAMBURGER MENU TOGGLE =====
	const hamburger = document.getElementById("hamburger-menu");
	const mobileMenu = document.getElementById("mobile-menu");

	if (hamburger && mobileMenu) {
		hamburger.addEventListener("click", () => {
			if (mobileMenu.classList.contains("hidden")) {
				mobileMenu.classList.remove("hidden");
				mobileMenu.style.display = "flex";
			} else {
				mobileMenu.classList.add("hidden");
				mobileMenu.style.display = "none";
			}
		});
	}
});
