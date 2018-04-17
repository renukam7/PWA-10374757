// Listen for install event, set callback
self.addEventListener('install', function (event) {
    // Perform some task
    console.log("install");
});
self.addEventListener('activate', function (event) {
    // Perform some task
    console.log("activate");
    
    if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }﻿
});
