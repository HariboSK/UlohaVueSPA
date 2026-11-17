<script setup>
import {computed} from 'vue'
import data from '../data.json'
import ExperienceCard from '../components/ExperienceCard.vue'

const props = defineProps({
  slug: {
    type: String,
    required: true
  }
})

const destination = computed(() => {
  return data.destinations.find(destination => destination.slug === props.slug)
})

</script>


<template> 
    <button @click="$router.back()" class="btn-back">Späť</button>
    <template v-if="destination">
        <div class="destination-details">
            <div>
                <h1>{{ destination.name }}</h1>
                <p>{{ destination.description }}</p>
            </div>
            <div>
                <img :src="'/images/' + destination.image" :alt="destination.name">
            </div>
        </div>

        <div v-if="destination.experiences" class="experiences">
            <h2>Zážitky v {{ destination.name }}</h2>
            <div class="cards">
                <ExperienceCard
                    v-for="experience in destination.experiences"
                    :key="experience.slug"
                    :experience="experience"
                    :destinationSlug="destination.slug"
                />
            </div>
        </div>
    </template>

    <div v-else class="not-found">
        <p class="not-found__code">
            Destinácia s identifikátorom (slug)
            <span class="not-found__slug">"{{ props.slug }}"</span>
            nebola nájdená.
        </p>
    </div>

    <RouterView :key="$route.fullPath"/> <!-- Zobrazenie komponentu ExperiencesView pre danú destináciu -->
</template>