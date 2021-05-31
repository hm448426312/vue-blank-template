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

function renderScrollNumber(el, binding) {
  let start = (binding.value && binding.value.value) || 0;
  let target = (binding.value && binding.value.target) || 100;
  let step = (binding.value && binding.value.step) || 0;
  let time = (binding.value && binding.value.time) || 1;
  let tempTimer = setInterval(() => {
    if (start < target) {
      time -= 0.001;
      let startStr = start.toString();
      if (target.toString().length < 6) {
        step += 1;
        start += step;
        el.innerHTML = start;
      } else {
        step += 500;
        start += step;
        el.innerHTML = startStr.substr(0, startStr.length - 3) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
      }
    } else {
      el.innerHTML = target;
      clearInterval(tempTimer);
    }
  }, time);
}

Vue.directive('scroll-number', {
  bind: (el, binding) => {
    renderScrollNumber(el, binding);
  },
  update: (el, binding) => {
    if (!binding.oldValue || (binding.oldValue.target !== binding.value.target)) {
      renderScrollNumber(el, binding);
    }
  }
});
