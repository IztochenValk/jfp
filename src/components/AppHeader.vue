<script setup>

defineProps({
  
})

</script>

<template>
<div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">

    <a class="btn btn-ghost text-xl">Florian</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/exercises">Exos</router-link></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn">Button</a>
  </div>
</div>

</template>
