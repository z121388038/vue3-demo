import { Directive } from 'vue';

export const debounce: Directive = {
  mounted(el, binding) {
    let timer: number;
    el.addEventListener('click', () => {
      timer && clearTimeout(timer);
      timer = window.setTimeout(() => binding.value(), 300);
    });
  },
};

export default debounce;
