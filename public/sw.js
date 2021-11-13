let caheData = "basuraB1"
this.addEventListener('install', e => {
    e.waitUntil(
        caches.open(caheData).then(cache =>
            {
                cache.addAll([
                    'static/js/main.chunk.js',
                    'static/js/0.chunk.js',
                    'static/js/bundle.js',
                    '/index.html',
                    '/',
                    '/static/js/vendors~main.chunk.js'
                ])
            }
    ) 
)})

this.addEventListener('fetch', e => {
    if (!navigator.onLine) {
        e.respondWith(
            caches.match(e.request).then(res => {
                if (res) {
                    return res
                }
                
                
            })
        )
    }
        
})

