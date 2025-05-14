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

	window.addEventListener("DOMContentLoaded", () => {
		const header = document.querySelector("header");
		const hero = document.querySelector(".hero-section"); // tambahin class ini ke div hero
		const headerHeight = header.offsetHeight;

		hero.style.height = `calc(100vh - ${headerHeight}px)`;
	});

	// ===== PRODUCT CARD CLICK =====
	document.querySelectorAll(".product-card").forEach((card) => {
		card.addEventListener("click", function () {
			window.location.href = "product-detail.html";
		});
	});

	// ===== CART BUTTON CLICK =====
	document.querySelectorAll(".cart-button").forEach((btn) => {
		btn.addEventListener("click", function () {
			window.location.href = "cart.html";
		});
	});

	// ===== HAMBURGER MENU TOGGLE =====
	const hamburger = document.getElementById("hamburger-menu");
	const mobileMenu = document.getElementById("mobile-menu");

	if (hamburger && mobileMenu) {
		hamburger.addEventListener("click", () => {
			mobileMenu.classList.toggle("hidden");
		});
	}
});
