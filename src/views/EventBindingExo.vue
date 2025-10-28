<template>
    <div class="container mx-auto p-4 md:p-8">
        <div class="card bg-base-100 shadow-xl rounded-box p-6">
            <h5 class="card-title text-2xl font-bold mb-4">TP Event Binding Mode</h5>

            <!-- Section pour la gestion des événements de clavier -->
            <div class="mt-6 mb-4 card bg-base-200 shadow-lg rounded-box p-4">
                <h6 class="text-xl font-semibold mb-2"><code>v-on:keyup</code> ou <code>@keyup</code></h6>

                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text">Saisissez du texte</span>
                    </div>
                    <input @keyup="reflectInput1" type="text" placeholder="Tapez ici..."
                        class="input input-bordered w-full" />
                </label>
                <div class="mt-3 p-3 bg-base-100 rounded-box shadow">
                    <p>Le contenu de l'input est : <span class="badge badge-accent">{{ input1 }}</span></p>
                </div>
            </div>

            <!-- Section pour le modificateur d'événement .esc -->
            <div class="mt-6 mb-4 card bg-base-200 shadow-lg rounded-box p-4">
                <h6 class="text-xl font-semibold mb-2">Modificateur d'événement</h6>

                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text">Saisissez du texte et appuyez sur 'Échap'</span>
                    </div>
                    <input type="text" @keydown.esc="reflectInput2($event)"
                        placeholder="Tapez et appuyez sur 'Esc'" class="input input-bordered w-full" />
                </label>
                <div class="mt-3 p-3 bg-base-100 rounded-box shadow">
                    <p>La valeur confirmée par 'Échap' est : <span class="badge badge-primary">{{ input2 }}</span></p>
                </div>
            </div>

            <!-- Section pour l'événement de clic -->
            <div class="mt-6 mb-4 card bg-base-200 shadow-lg rounded-box p-4">
                <h6 class="text-xl font-semibold mb-2">Événement <code>@click</code></h6>

                <button class="btn btn-error text-white" @click="displayAlert('Hello Saturn')">
                    Afficher une alerte
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

function reflectInput1(e){
    input1.value = e.currentTarget.value
}

let input1 = ref('')

//

function reflectInput2(e){
    input2.value = e.currentTarget.value
}

let input2 = ref('')

//

function displayAlert(text){
    alert(text)
}

</script>