//	Installing the Service Worker
var CACHE_NAME = 'renukaApp';
var urlsToCache = [
  './',
  './index.html',
  './movie.json',
  './service-worker.js',
  './Renuka10374757book-tickets.html',
  './Renuka10374757movie-details.html',
  './js/index.js',
  './js/main.js',
  './js/inview.min.js',
  './js/book-tickets.js',
  './js/bootstrap.min.js',
  './js/countdown.js',
  './js/counterup.min.js',
  './js/gmaps.min.js',
  './js/jquery-te.min.js',
  './js/jquery.min.js',
  './js/movie-details.js',
  './js/slick.min.js',
  './js/waypoints.min.js',
  './css/bootstrap.min.css',
  './css/font-awesome.min.css',
  './css/index - Copy.css',
  './css/index.css',
  './css/jquery-te.css',
  './css/main.css',
  './css/responsive.css',
  './css/slick.css',
  './images/bg/banner.jpg',
  './images/bg/banner2.jpg',
  './images/bg/bg3.jpg',
  './images/bg/bg5.jpg',
  './images/bg/cta-bg.jpg',
  './images/bg/fsdd.jpg',
  './images/bg/step-bg.jpg',
  './images/1.jpg',
  './images/2.jpg',
  './images/3.jpg',
  './images/4.jpg',
  './images/5.jpg',
  './images/6.jpg',
  './images/7.jpg',
  './images/8.jpg',
  './images/9.jpg',
  './images/10.jpg',
  './images/banner.jpg',
  './images/logo.png',
  './images/logo2.png',
  './images/logo3.png',
  './images/moviesc.jpg',
  './images/Thumbs.db',
  'https://fonts.googleapis.com/css?family=Varela+Round',
];
// Fetching the file resources using the Fetch Api
self.addEventListener('fetch', function(event) {
  console.log('Fetch Opened cache');
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

/*
//  Activating the Service Worker
self.addEventListener('activate', function(event) {
console.log('Activate Opened cache');
  var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );

});*/
//  Activating the Service Worker
self.addEventListener('activate', function(event) {
	console.log('[Service Worker] Activating Service Worker...', event);
	return self.clients.claim();
});

// Fetching the file resources using the Fetch Api
self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
			.then(function(response){
				if(response){
					return response;
				}else{
					return fetch(event.response);
				}
			})
	);
});
