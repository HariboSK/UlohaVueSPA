<script setup>
import data from '../data.json'
import { computed } from 'vue'

const destination = computed(() => {
  return data.destinations.find(
    dest => dest.slug === props.slug
  )
})
  
const experience = computed(() => {
  return destination.value?.experiences.find(
    experience => experience.slug === props.experienceSlug
  )
})

const props = defineProps({
  slug: {
    type: String,
    required: true
  },
  experienceSlug: {
    type: String,
    required: true
  }
});
</script>


<template>
  <article v-if="experience" class="experience-details">
    <h2>{{ experience.name }}</h2>

    <div class="center-con">
      <img
        :src="'/images/' + experience.image"
        :alt="experience.name"
      >

      <p>{{ experience.description }}</p>
    </div>
  </article>

  <p v-else>Zážitok nebol nájdený.</p>
</template>