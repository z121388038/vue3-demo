import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import * as ELIcons from "@element-plus/icons-vue";

const app = createApp(App);

for (const [iconName, iconComponent] of Object.entries(ELIcons)) {
  app.component(
    iconName === "Menu" ? `icon-${iconName.toLowerCase()}` : iconName,
    iconComponent
  );
}

app.use(store).use(router).mount("#app");
