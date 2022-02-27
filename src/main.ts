import { IonicVue } from "@ionic/vue";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/_imports.scss";
import "./assets/styles/_variables.scss";
import { router } from "./config/router";

const app = createApp(App).use(IonicVue).use(router);

router.isReady().then(() => {
  app.mount("#app");
});
