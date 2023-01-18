<script setup>
import NavBar from '@/components/NavBar.vue';
import Hero from '@/components/Hero.vue'
import { globalStore } from '@/store/globals.store';
import { onMounted } from 'vue';
import {getTodos, deleteTodos} from '@/controller/todos.controlloer'

const store = globalStore()

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
        <div class="row d-flex flex-column align-items-center">
            <div class="col-6 d-flex justify-content-between mt-3" v-for="todo in store.todos">
                <p>
                    {{ 
                    todo.name
                }} :)
                </p>
                <button class="btn btn-outline-dark" @click="deleteHandler(todo.id)">X</button>
            </div>
        </div>
    </div>
</template>
