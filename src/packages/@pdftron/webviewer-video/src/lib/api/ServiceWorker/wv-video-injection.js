const videoEndpoint = new URL(location).searchParams.get('videoEndpoint');
const passedHeaders = JSON.parse(new URL(location).searchParams.get('headers'));

// Immediately apply any updates to service worker if needed
self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting());
});

// We want the service worker to work immediately and not on next page load
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // Only inject custom headers if video matches video passed into webviewer
  if (event.request.url === videoEndpoint) {
    event.respondWith(customHeaderRequestFetch(event));
  }
});

function customHeaderRequestFetch(event) {
  let headers = new Headers();

  Object.keys(passedHeaders).forEach(key => {
    headers.append(key, passedHeaders[key]);
  });

  const newRequest = new Request(event.request, {
    withCredentials: true,
    mode: 'cors',
    headers,
  });
  return fetch(newRequest);
}