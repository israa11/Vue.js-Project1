import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import deleteRecipe from '@/views/deleteRecipe.vue'
import deleteAllRecipe from '@/views/deleteAllRecipe.vue'
import newRecipe from '@/views/newRecipe.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/recipe/:recipeId',
    name: 'Recipe',
    component: () => import('../views/RecipeV.vue')
  },
  {
    path: '/delete-recipe/:idRecipe',
    name: 'deleteRecipe',
    component: deleteRecipe 
  },
  {
    path: '/deleteAllrecipe',
    
  name: 'deleteAllrecipe',
    component: deleteAllRecipe
  },
  {
    path: '/new-Recipe',
    name: 'newRecipe',
    component: newRecipe
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
