<script setup>
import { computed, ref } from 'vue'
import dataDestinations from '../data.json'

const destinations = dataDestinations.destinations
const selectedStoryIndex = ref(null)

const stories = computed(() =>
  destinations.flatMap(destination =>
    destination.experiences.map(experience => ({
      ...experience,
      destinationName: destination.name,
      destinationSlug: destination.slug
    }))
  )
)

const currentStory = computed(() => {
  if (selectedStoryIndex.value === null) {
    return null
  }

  return stories.value[selectedStoryIndex.value]
})

const openStory = story => {
  selectedStoryIndex.value = stories.value.findIndex(
    item =>
      item.slug === story.slug &&
      item.destinationSlug === story.destinationSlug
  )
}

const closeStory = () => {
  selectedStoryIndex.value = null
}

const nextStory = () => {
  if (selectedStoryIndex.value < stories.value.length - 1) {
    selectedStoryIndex.value++
  }
}

const previousStory = () => {
  if (selectedStoryIndex.value > 0) {
    selectedStoryIndex.value--
  }
}

</script>
<template>
    <div class="home">
        <h1>Nahrate zážitky z výletov</h1>
        <section class="stories">
            <h2>Objav zážitky</h2>

            <div class="story-list">
                <button
                    v-for="story in stories"
                    :key="`${story.destinationSlug}-${story.slug}`"
                    class="story"
                    type="button"
                    @click="openStory(story)"
                >
                    <img
                        :src="'/images/' + story.image"
                        :alt="story.name"
                    >

                    <span>{{ story.name }}</span>
                </button>
            </div>
        </section>

        <div v-if="currentStory" class="modal-overlay" @click.self="closeStory">
            <article class="modal-overlay-content story-modal">
                <button class="close" type="button" @click="closeStory">&times;</button>
                <img
                    :src="'/images/' + currentStory.image"
                    :alt="currentStory.name"
                >

                <p>{{ currentStory.destinationName }}</p>
                <h2>{{ currentStory.name }}</h2>
                <p>{{ currentStory.description }}</p>

                <div class="story-navigation">
                    <button @click="previousStory" class="btn-story">Predchádzajúci</button>
                    <button @click="nextStory" class="btn-story">Ďalší</button>
                </div>
            </article>
        </div>

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
