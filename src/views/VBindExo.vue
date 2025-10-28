<template>
            <div class="max-w-xl mx-auto p-4 flex flex-col justify-center items-center">
                <img :src="user.img" alt="" class="rounded-full shadow w-20 h-20">

                <div class="overflow-x-auto ">
                    <table class="table table-zebra">
                    <thead class="bg-base-200">
                        <tr>
                            <td class="w-1/3"></td>
                            <td>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="w-1/3">Name</td>
                            <td>
                                <input type="text" placeholder="Type here" class="input" :value="user.name" />
                            </td>
                        </tr>
                        <tr>
                        <td>Age</td>
                        <td>
                            <div class="badge badge-soft badge-primary">{{ user.age }}</div>
                        </td>
                        </tr>
                        <tr>
                            <td>Age + 10</td>
                            <td>
                                <div class="badge badge-soft badge-success">{{ user.age + 10}}</div>
                            </td>                        
                        </tr>
                    </tbody>
                    </table>
                </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

let user = {
    name: 'Dr Mario',
    age: 30,
    luckyNumber: Math.random(0,14789),
    img: "https://s3.amazonaws.com/medium.cosplay.com/77883/2111288.jpg"
}

</script>