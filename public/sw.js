const CACHE_NAME = "furniture-app-v1";
const STATIC_ASSETS = [
	"/",
	"/shop",
	"/critical.css",
	"/_next/static/css/",
	"/_next/static/js/",
];

// Install event
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(STATIC_ASSETS);
		})
	);
});

// Activate event
self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cacheName) => {
					if (cacheName !== CACHE_NAME) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});

// Fetch event - Network first for HTML, Cache first for assets
self.addEventListener("fetch", (event) => {
	const { request } = event;
	const url = new URL(request.url);

	// Handle navigation requests (HTML)
	if (request.mode === "navigate") {
		event.respondWith(
			fetch(request)
				.then((response) => {
					const responseClone = response.clone();
					caches.open(CACHE_NAME).then((cache) => {
						cache.put(request, responseClone);
					});
					return response;
				})
				.catch(() => {
					return caches.match(request);
				})
		);
		return;
	}

	// Handle static assets (CSS, JS, Images)
	if (
		url.pathname.startsWith("/_next/static") ||
		url.pathname.startsWith("/images") ||
		request.destination === "image"
	) {
		event.respondWith(
			caches.match(request).then((cachedResponse) => {
				if (cachedResponse) {
					return cachedResponse;
				}
				return fetch(request).then((response) => {
					const responseClone = response.clone();
					caches.open(CACHE_NAME).then((cache) => {
						cache.put(request, responseClone);
					});
					return response;
				});
			})
		);
	}
});
