<template>
    <div class="card w-96 bg-base-100 card-xs shadow-sm">
    <div class="card-body">
        <h2 class="card-title">Compteurs</h2>
        <p>Ici on fait des trucs avec les events et un compteur</p>
        <div class="justify-end card-actions">
        <button class="btn btn-primary" v-on:click.right="increment">+99</button>
        <button class="btn btn-success" v-on:click.middle="decrement">-11</button>
        <br>
        <div class="badge badge-outline">{{ counter }}</div>

        </div>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { reactive } from 'vue'

let counter = ref(0);

function increment(e){
    counter.value += 99
}
function decrement(e){
    counter.value -=11
}
</script>