document.addEventListener("DOMContentLoaded", function () {
	const links = document.querySelectorAll(".middle-section a");
	const currentPath = window.location.pathname.split("/").pop();

	links.forEach((link) => {
		if (
			link.getAttribute("href") === currentPath ||
			(currentPath === "" && link.getAttribute("href") === "#")
		) {
			link.classList.add("active");
		} else {
			link.classList.remove("active");
		}
	});
});

document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll(".product-card").forEach((card) => {
		card.addEventListener("click", function () {
			window.location.href = "product-detail.html";
		});
	});
});

document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll(".cart-button").forEach((card) => {
		card.addEventListener("click", function () {
			window.location.href = "cart.html";
		});
	});
});

const middleSection = document.querySelector('.middle-section');
const hamburger = document.querySelector('#hamburger-menu');

hamburger.onclick = () => {
	middleSection.classList.toggle('open');
};
document.addEventListener('click', function(e) {
	if (!hamburger.contains(e.target) && !middleSection.contains(e.target)) {
		middleSection.classList.remove('open');
	}
});
