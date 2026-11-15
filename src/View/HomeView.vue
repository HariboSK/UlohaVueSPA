<script setup>
import dataDestinations from '../data.json'
const destinations = dataDestinations.destinations
</script>

<template>
    <div class="home">
        <button @click="$router.back()" class="btn-back">Späť</button>
        <h1>Všetky destinácie</h1>
        <div class="destinations">
            <div v-for="destination in destinations">
                <RouterLink :to="{ name: 'destination', params: { slug: destination.slug } }">
                    <h2>{{ destination.name }}</h2>
                    <img :src="'/images/' + destination.image" :alt="destination.name">
                </RouterLink>
        </div>
        </div>
    </div>
</template>
