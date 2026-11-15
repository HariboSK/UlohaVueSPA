<script setup>
import data from '../data.json'

const destinations = data.destinations
</script>

<template>
  <nav id="nav" aria-label="Hlavná navigácia">
    <RouterLink to="/">Domov</RouterLink>
    <RouterLink v-for="destination in destinations" 
                :key="destination.slug" 
                :to="{ 
                  name: 'destination', 
                  params: { slug: destination.slug } 
                }">
      {{ destination.name }}
    </RouterLink>
  </nav>
</template>