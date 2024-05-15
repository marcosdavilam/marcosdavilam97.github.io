import { OnIntersection } from "../composables/OnIntersection.js";
import { ref} from "vue";

const observer = ref({});

export const Intersection = {
    mounted(el, binding, vnode) {
        observer.value = OnIntersection(el, onEnter, onExit, false, {
            threshold: 0.5,
          });
    },
    
    updated(el, binding, vnode) { 
    },

    unmounted(el, binding, vnode, prevVnode) {
        observer.value.disconnect()
    }

    
}

const onEnter = () => {
    console.log("entered");
};

// This is the (optional) callback being called when the element no longer intersects
const onExit = () => {
    console.log("exited");
};

// export default Intersection