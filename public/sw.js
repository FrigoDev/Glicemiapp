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

// push event
this.addEventListener('push', e => {
    const data = e.data.json()
    this.registration.showNotification(data.title, { body: data.message, icon: 'https://cdn.discordapp.com/attachments/584951720002453507/1041838802949378168/Recurso2.png' } ) 
})

