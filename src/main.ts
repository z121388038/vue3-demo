import { createApp } from 'vue';
import App from './App.vue';
import 'element-plus/theme-chalk/src/index.scss';
import './registerServiceWorker';
import router from './router';
// import * as directives from './directives';
import store from './store';
import * as ELIcons from '@element-plus/icons-vue';
import directives from './directives';
const app = createApp(App);

for (const [iconName, iconComponent] of Object.entries(ELIcons)) {
  app.component(iconName === 'Menu' ? `icon-${iconName.toLowerCase()}` : iconName, iconComponent);
}

app.use(directives).use(store).use(router).mount('#app');
