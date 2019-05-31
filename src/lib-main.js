import VueGradation from "./components/Gradation.vue";

// ...
const Component = {
  install(Vue) {
    const components = {
      VueGradation // <vue-gradateion /> として使える
    };
    for (const [name, c] of Object.entries(components)) {
      Vue.component(name, c);
    }
  }
};

export default Component;
