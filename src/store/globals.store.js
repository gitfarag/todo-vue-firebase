import { defineStore } from "pinia";
import { ref } from "vue";

const globalStore = defineStore("counter",()=>{
    const todos = ref([])
    return {todos}
})
export {globalStore}