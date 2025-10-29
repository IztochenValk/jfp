<template>
    <div class="flex flex-col">
        <div class="flex w-full flex-col">
            <div class="divider">EXO 1</div>
        </div>
        <div class="card w-100vw bg-base-100 card-xl shadow-sm">
            <div class="card-body">
                <h2 class="card-title">Exo 1 watchers</h2>
                <p>{{ counter }}</p>
                <div class="justify-end card-actions">
                <button class="btn btn-primary" @click="increment">+</button>
                </div>
            </div>
        </div>
        <br>
        <div class="flex w-full flex-col">
            <div class="divider">EXO 2</div>
        </div>
        <div :class="classDivStatic1" @click="addStaticClass">
            <div class="card-static-1 card w-100vw bg-base-100 card-xl shadow-sm"></div>
                <div class="card-body">
                    <h2 class="card-title">Exo 2 Append Class - Div 1</h2>
            </div>
        </div>

        <div :class="classDivStatic2" @click="addStaticClass">
            <div class="card-static-2 card w-100vw bg-base-100 card-xl shadow-sm"></div>
                <div class="card-body">
                    <h2 class="card-title">Exo 2 Append Class - Div 2</h2>
            </div>
        </div>

        <div class="card-dynamic-1 card w-100vw bg-base-100 card-xl shadow-sm my-3 cursor-pointer" @click="addDynamicStyle($event, 'green')" :style="{backgroundColor: bgDiv1}">
            <div class="card-static-2 card w-100vw bg-base-100 card-xl shadow-sm"></div>
                <div class="card-body">
                    <h2 class="card-title">Exo 2 Styling Dynamic - Div 1</h2>
            </div>
        </div>

        <div class="card-dynamic-2 card w-100vw bg-base-100 card-xl shadow-sm my-3 cursor-pointer" @click="addDynamicStyle($event, 'green')" :style="{backgroundColor: bgDiv2}">
            <div class="card-static-2 card w-100vw bg-base-100 card-xl shadow-sm"></div>
                <div class="card-body">
                    <h2 class="card-title">Exo 2 Styling Dynamic - Div 2</h2>
            </div>
        </div>

        <div class="flex w-full flex-col">
            <div class="divider">EXO 3</div>
        </div>
        <div class="card w-100vw bg-base-100 card-xl shadow-sm my-3 cursor-pointer" >
            <div class="card w-100vw bg-base-100 card-xl shadow-sm">
                <div class="card-body">
                    <input type="text" v-model="helloString" placeholder="Entrez le mdp ici"/>
                    <br>
                    <h2 :class="helloClass">HELLO WORLD (CLASSE DYNAMIQUE)</h2>
                </div>
            </div>
            <div class="divider">

            </div>
            <div class="card w-100vw bg-base-100 card-xl shadow-sm">
                <div class="card-body">
                    <input type="text" v-model="maClassWorld" placeholder="Entrez le bg color ici"/>
                    <br>
                    <h2 :style="{backgroundColor: worldClass, display: h2Class}">HELLO WORLD (COULEUR DYNAMIQUE)</h2>
                    <button @click="toggleH2" class="btn btn-primary">Toggle H2</button>
                </div>
            </div>
        </div>

            <div class="divider">EXO 4</div>

            <div class="card w-100vw bg-base-100 card-xl shadow-sm">
                <div class="card-body">
                <h2 >Ma liste de films de malade</h2>
                    <input type="text" placeholder="Entrez le nom d'un film" v-model="newMovie"/>
                    <br>
                    <button @click="addMovie" class="btn btn-primary">Add new movie</button>
                    <span v-if="watchList.length === 0">Aucun film pour le moment</span>
                    <ul v-else>
                        <li v-for="(movie,index) in watchList" @click="deleteMovie(index)" :key=index class="cursor-pointer">
                            {{ movie }} 🗑️
                        </li>
                    </ul>
                </div>
            </div>

    </div>

        

</template>

<script setup>

import {ref, watch, computed} from 'vue'

// Exo 1; Watcher

const counter = ref(0)
watch(counter, (newVal)=>{
    newVal >= 7? counter.value = 0 : null;
})

function increment(){
    counter.value++
}

// Exo 2: Static class addition

let classDivStatic1 = ref('card-static-1 card w-100vw bg-base-100 card-xl shadow-sm my-3 cursor-pointer')
let classDivStatic2 = ref('card-static-2 card w-100vw bg-base-100 card-xl shadow-sm my-3 cursor-pointer')

function addStaticClass(e){
    if(e.currentTarget.className.includes('card-static-1')){
        if(!classDivStatic1.value.includes('bg-neutral')){
            classDivStatic1.value += ' text-white bg-neutral'
        }
        else{
            classDivStatic1.value = 'card-static-1 card w-100vw bg-base-100 card-xl shadow-sm my-3 cursor-pointer'
        }
    }
    else if(e.currentTarget.className.includes('card-static-2')){
        if(!classDivStatic2.value.includes('bg-neutral')){
            classDivStatic2.value += ' text-white bg-neutral'
        }
        else{
            classDivStatic2.value = 'card-static-2 card w-100vw bg-base-100 card-xl shadow-sm my-3 cursor-pointer'
        }
    }

}

// Exo 2: Dynamic styling

let bgDiv1 = ref('white')
let bgDiv2 = ref('white')

function addDynamicStyle(e, newBgColor){
    if(e.currentTarget.className.includes('card-dynamic-1')){
        if(!bgDiv1.value.includes(newBgColor)){
            bgDiv1.value = newBgColor
        }
        else{
            bgDiv1.value = 'white'
        }
    }
    else if(e.currentTarget.className.includes('card-dynamic-2')){
        if(!bgDiv2.value.includes(newBgColor)){
            bgDiv2.value = newBgColor
        }
        else{
            bgDiv2.value = 'white'
        }
    }
}

//Exo 3 
let maClasseHello = ref('bg-secondary text-accent')
let helloString = ref('')
let displayH2 = ref('block')

const helloClass = computed(() => {
  return helloString.value === 'helllo' ? maClasseHello.value    : ''
})

let maClassWorld = ref('')

const worldClass = computed(() => {
  return maClassWorld.value
})

// 

function toggleH2() {
  displayH2.value = displayH2.value === 'block' ? 'none' : 'block'
}

const h2Class = computed(()=>{
  return displayH2.value 
})

//

let watchList = ref([])
let newMovie = ref('')

function addMovie(){
    watchList.value.push(newMovie.value)
    newMovie.value = ''
}

function deleteMovie(index){
    watchList.value.splice(index, 1)
}

const displayList = computed(()=>{
    return watchList
})



</script>