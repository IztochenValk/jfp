<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <button class="btn btn-soft">What's Up</button>
  <button class="btn btn-soft btn-primary">Bruh</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
