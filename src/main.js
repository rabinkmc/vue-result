import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";
import store from "./store";
import axios from "axios";

import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";

const app = createApp(App);
app.use(mdiVue, { icons: mdijs });
app.use(router);
axios.defaults.baseURL = "http://localhost:8050/api/v1";
app.config.globalProperties.$http = axios;
app.use(store).mount("#app");
