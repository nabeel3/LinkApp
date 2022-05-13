import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from './plugins/font-awesome'
import App from './App.vue'
import store from "./stores"
import router from './router'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(FontAwesomeIcon)

app.use(store)


app.mount('#app')
