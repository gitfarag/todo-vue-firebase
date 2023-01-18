<script setup>
import NavBar from '@/components/NavBar.vue';
import Hero from '@/components/Hero.vue'
import { globalStore } from '@/store/globals.store';
import { onMounted } from 'vue';
import {getTodos, deleteTodos} from '@/controller/todos.controlloer'
import { ref } from 'vue';

const store = globalStore()
const done = ref(false)

onMounted(async()=>{
    const res = await  getTodos()
    store.todos = res
})

const deleteHandler = async (id)=>{
    await deleteTodos(id)
    const res = store.todos.filter(e=>e.id !== id)
    store.todos = res
}
</script>

<template>
    <NavBar/>
    <Hero/>
    <div class="container">
        <div class="row flex-column justify-content-center align-items-center">
            <div class="col-11 col-md-6 mt-3 item" :class="done && `bg-success`" v-for="todo in store.todos">
                <p>
                    {{ 
                    todo.name
                }} :)
                </p>
                <fa icon="fa-solid fa-trash" @click="deleteHandler(todo.id)"></fa>

            </div>
        </div>
    </div>
</template>
<style scoped>
.item{
    background-color: rgba(0, 0, 0, 0.267);
    color: white;
    border-radius: 10px;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
}
.item p {
    margin: auto 0;
}
.fa-trash:hover{
    cursor: pointer;
    color: rgb(231, 35, 35);
    transition: 0.3s;
}
</style>
