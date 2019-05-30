import Vue from 'vue';
import { Gradation } from './components/Gradation.vue';

// ...
export default VueGradation = {
    install(Vue, options) {
        const components = {
            Gradation,　// <gradateion /> として使える
        }
        for (const [name, c] of Object.entries(components)) {
            Vue.component(name, c)
        }
    },
}
