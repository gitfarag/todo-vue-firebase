<script setup>
import { addTodos,getTodos } from '@/controller/todos.controlloer'
import { globalStore } from '@/store/globals.store';
import { ref } from 'vue';

const store = globalStore()
const inp = ref('')

const handleClick = async () => {
    try {
        if(!inp.value){
            alert('no entry')
            return
        }
        await addTodos(inp.value)
        const res = await  getTodos()
        store.todos = res
        console.log("done");
    } catch (error) {
        console.log(error);
    }
}
</script>

<template>
    <div>
        <form class="d-flex" @submit.prevent="handleClick($event)">
            <input 
            class="form-control me-2" 
            type="text" placeholder="Add Todo" aria-label="Add Todo"
            v-model="inp">
            <button class="btn btn-outline-dark" type="submit">ADD</button>
        </form>
    </div>
</template>

<style scoped>
.form-control:focus {
    color: #212529;
    background-color: #fff;
    border-color: #212529;
    outline: 0;
    box-shadow: 0 0 0 0.25rem #2125293d
}
</style>