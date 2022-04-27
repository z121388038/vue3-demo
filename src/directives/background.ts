import { Directive } from 'vue';

export const background: Directive = (el, binding) => {
  el.style.background = binding.value;
};

export default background;
