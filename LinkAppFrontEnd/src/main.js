import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { UploadMedia, UpdateMedia } from 'vue-media-upload';
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

app.component('upload-media' , UploadMedia);
app.component('update-media' , UpdateMedia);
app.use(store)


app.mount('#app')
