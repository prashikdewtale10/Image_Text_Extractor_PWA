const staticCurCon = "Image Text Extractor"
const assets = [
  "./",
  "./index.html",
  "./style/ocr.css",
  "./js/tesseract-ocr.js",
  
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCurCon).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })