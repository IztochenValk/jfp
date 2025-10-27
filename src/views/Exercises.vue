<template>
    <table>
        <thead>
            <tr>
                <th>Type</th>
                <th>value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>1</th>
                <td>{{ randomNumber }}</td>
            </tr>
            <tr>
                <th>2</th>
                <td>{{ randomString }}</td>
            </tr>
            <tr>
                <th>3</th>
                <td>{{ randomObject.class }}</td>
            </tr>
            <tr>
                <th>3</th>
                <td>{{ randomFunction() }}</td>
            </tr>
        </tbody>
    </table>
    {{ }}
</template>

<script setup>
import { ref } from 'vue'

const randomNumber = ref(0);
const randomString = ref("wasssup bruh big up from the hood")
const randomObject = ref({
    class: "warrior",
    hp: 50,
    mp: 12
})
const randomFunction = ref(()=>{
    return "Hello World"
})
const randomArray = ref(['banana', 'zucchini', 'orange', "strawberry"])
</script>