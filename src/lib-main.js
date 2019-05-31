import Vue from 'vue';
import { Gradation } from './components/Gradation.vue';

// ...
const VueGradation = {
    install(Vue, options) {
        const components = {
            Gradation,　// <gradateion /> として使える
        }
        for (const [name, c] of Object.entries(components)) {
            Vue.component(name, c)
        }
    },
}

export default VueGradation
