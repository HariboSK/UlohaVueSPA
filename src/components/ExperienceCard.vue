<script setup>
defineProps({
  experience: {
    type: Object,
    required: true
  },
  destinationSlug: {
    type: String,
    required: true
  }
})
</script>



<template>
  <RouterLink
    class="card"
    :to="{
      name: 'experience',
      params: {
        slug: destinationSlug,
        experienceSlug: experience.slug
      }
    }"
  >
    <img
      :src="'/images/' + experience.image"
      :alt="experience.name"
    >

    <div class="card__text">
      <h3>{{ experience.name }}</h3>
    </div>
  </RouterLink>
</template>