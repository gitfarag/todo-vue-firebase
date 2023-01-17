<script setup>
import { addTodos } from '@/controller/todos.controlloer'
import { ref } from 'vue';
const inp = ref('')
const handleClick = async () => {
    try {
        if(!inp.value){
            alert('no entry')
            return
        }
        await addTodos(inp.value)
        console.log("done");
    } catch (error) {
        console.log(error);
    }
}
</script>

<template>
    <div>
        <form class="d-flex" @submit.prevent="handleClick($event)">
            <input class="form-control me-2" type="text" placeholder="Add Todo" aria-label="Add Todo"
                @change="(event) => { inp = event.currentTarget.value }">
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