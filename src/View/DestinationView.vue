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
    <div v-if ="destination" class="destination-details">
        <div>
            <h1>{{destination.name }}</h1>
            <p>{{ destination.description}}</p>
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

    <p v-else>Destinácia s identifikátorom (slug) "{{ props.slug }}" nebola nájdená.</p>


    <RouterView :key="$route.fullPath"/> <!-- Zobrazenie komponentu ExperiencesView pre danú destináciu -->
</template>