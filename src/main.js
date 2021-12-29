import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { projectAuth } from './firebase/config'

let app;

// fire the app after firebase establish the connection to the database to get user (if connected alrdy)
projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)
            .use(router)
            .mount('#app')
    }
})