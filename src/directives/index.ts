import { App, Directive } from 'vue';
import debounce from '@/directives/debounce';
import background from '@/directives/background';

const directives = {
  debounce,
  background,
};

export default {
  install(app: App) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, (directives as { [key: string]: Directive })[key]);
    });
  },
};
