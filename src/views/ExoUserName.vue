<template>
    <div class="card w-96 bg-base-100 card-xs shadow-sm">
        <div class="card-body">
            <h2 class="card-title">Compteurs</h2>
            <p>Ici on fait des trucs avec les events et un compteur</p>
            <div class="justify-end card-actions">
                <button class="btn btn-primary" v-on:click.right="increment">+99</button>
                <button class="btn btn-success" v-on:click.middle="decrement">-11</button>
                <button></button>
                <br>
                <div class="badge badge-outline">{{ counter }}</div>
                <br/>
            </div>
            <div>
                <span class="badge badge-info">{{ afficherNameUser() }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { reactive } from 'vue'

let counter = ref(0);
let nameUser = ref('')
function increment(e){
    counter.value += 99
}
function decrement(e){
    counter.value -=11
}

const afficherNameUser = computed(() => {
  console.log('afficherNameUser lancée')
  if (nameUser.value === '') {
    return 'logged out'
  } else {
    return 'logged in'
  }
})


</script>