import { createRouter, createWebHistory } from 'vue-router'
import DestinationView from '../View/DestinationView.vue'
import ExperiencesView from '../View/ExperienceView.vue'
import HomeView from '../View/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/destination/:slug',
      name: 'destination',
      component: DestinationView,
      props: route => ({
        slug: route.params.slug
      }),

      children: [{
        path: ':experienceSlug',
        name: 'experience',
        component: ExperiencesView,
        props: true
      }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../View/NotFound.vue'),
    }
  ],
})

router.afterEach((to, from) => {
  console.log('Stránka sa zmenila:', {
    from: from.fullPath,
    to: to.fullPath
  })
})

export default router
