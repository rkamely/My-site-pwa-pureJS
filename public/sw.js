// add version cache
let cacheVersion = 1
let cacheData = "Version" + cacheVersion
let cacheLinks = [
    '/', '/unCached', '/index.html', '/manifest.json',
    '/static/js/bundle.js',
    '/static/js/src_pages_Home_js.chunk.js',
    '/static/js/src_hoc_Wrapper_js.chunk.js',
    '/static/js/vendors-node_modules_aos_dist_aos_js-node_modules_aos_dist_aos_css.chunk.js',
    '/static/js/src_components_Button_ButtonContactMe_js-src_components_SegmentTitle_js.chunk.js',
    '/static/js/vendors-node_modules_emailjs_browser_es_index_js-node_modules_mui_icons-material_DarkMode_js--505b2b.chunk.js',
    '/static/js/src_pages_UnCached_js.chunk.js',
    '/static/media/MyPic.69d280943b90dbb364f9.png',
    '/static/media/skills.ade37db03c0dbed52da5.png', '/static/media/Projects.016eba8cc1546e497493.png',
    '/static/media/zeeroApp.ec9479c633ec295ff60a.png', '/static/media/contactMe.a1792648a1f27397f6f1.png',
    '/static/media/education.9addcbc90abeb6a1b10a.png', '/static/media/experience.c45d27fd261f3c85ea45.png',
    '/static/media/Storyboard.6b94fb52e04f3a60d167.png', '/static/media/starPayProject.60cb9542a4dc59bd26ec.png',
    '/static/media/SetarehAvalLogo.a9626e2a42e462fcf71b.png', '/static/media/Panel%20dashboard.e278d0c1a4da3487722f.png',
    '/static/media/loadingAnimation.7d262288deb3ebcbb780.gif',
    '/static/media/LexendDeca-Regular.19558eeb132b09794e87.ttf',
    '/static/media/Sprinkle.2c6265c73460de8382f3.svg'
]

// install pwa and add files should be cached

self.addEventListener("install", (event) => {
    event.waitUntil(caches.open(cacheData).then((cache) => {
        cache.addAll(cacheLinks)
    }))

})

self.addEventListener("activate", (event) => {
    event.waitUntil(caches.keys()
        .then(cacheNames => {
            return Promise.all(cacheNames.map(cacheName => {
                if (cacheName !== cacheData) {
                    return caches.delete(cacheName)
                }
            }))
        }))
})

self.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request)
        .then(response => {
            if (response) return response
            return fetch(event.request)
                .then(networkResponse => {
                    caches.open(cacheData)
                        .then(cache => cache.put(event.request, networkResponse.clone()))
                    return networkResponse
                })
                .catch(err => {
                    return caches.open(cacheData)
                        .then(cache => {
                            return cache.match('/unCached')
                        })
                })
        }))
});





