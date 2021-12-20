import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";
import store from "./store";
import axios from "axios";

const app = createApp(App);
app.use(router);
axios.defaults.baseURL = "http://localhost:8050/api/v1";
app.config.globalProperties.$http = axios;
app.use(store).mount("#app");
