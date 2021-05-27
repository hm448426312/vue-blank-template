import Vue from 'vue';

Vue.directive('demo', {
  bind: (el, binding) => {
    el.innerHTML = binding.value;
  },
  update: (el, binding) => {
    if (binding.oldValue !== binding.value) {
      el.innerHTML = binding.value;
    }
  }
});
