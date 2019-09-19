import NwImg from './NwImg.vue';

const install = function (Vue) {
  Vue.mixin({
    components: {
      'NwImg': NwImg
    }
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install: install
};
