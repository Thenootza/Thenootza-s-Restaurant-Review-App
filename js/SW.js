var cacheName = static_version;

self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open('static_version').then(function(cache){
      return cache.addAll([
        "/Thenootza's Restaurant Stage -1 Master/",
        "/Thenootza's Restaurant Stage -1 Master/css/styles.css",
        "/Thenootza's Restaurant Stage -1 Master/css/responsive.css",
        "/Thenootza's Restaurant Stage -1 Master/js/dbhelper.js",
        "/Thenootza's Restaurant Stage -1 Master/js/main.js",
        "/Thenootza's Restaurant Stage -1 Master/js/restaurant_info.js",
        "/Thenootza's Restaurant Stage -1 Master/index.html",
        "/Thenootza's Restaurant Stage -1 Master/restaurant.html",
        "/Thenootza's Restaurant Stage -1 Master/img/1.jpg",
        "/Thenootza's Restaurant Stage -1 Master/img/2.jpg",
        "/Thenootza's Restaurant Stage -1 Master/img/3.jpg",
        "/Thenootza's Restaurant Stage -1 Master/img/4.jpg",
        "/Thenootza's Restaurant Stage -1 Master/img/5.jpg",
        "/Thenootza's Restaurant Stage -1 Master/img/6.jpg",
        "/Thenootza's Restaurant Stage -1 Master/img/7.jpg",
        "/Thenootza's Restaurant Stage -1 Master/img/8.jpg",
        "/Thenootza's Restaurant Stage -1 Master/img/9.jpg",
        "/Thenootza's Restaurant Stage -1 Master/img/10.jpg",
        "/Thenootza's Restaurant Stage -1 Master/img/food.jpg"
      ]);
    })
  );
});

self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.match(event.request).then(function(response){
      if (response) return response;
      return fetch(event.request);
    })
  );
});
