<template>
    <div v-if="allrecipes.length > 0">
   <div class="row">
    
    <div class="col-8 mx-auto pt-5 ">
    <span class="float-start">List Of Recipes ({{allrecipes.length}})</span>
    
  <router-link :to="{ name: 'deleteAllrecipe' }"><button class="btn btn-danger float-end">Delete All</button></router-link>
  
</div>
</div>
    <div class="row mt-5" v-for="recipe in allrecipes" :key="recipe.id">
        <div class="col-8 bg-info-subtle mx-auto p-5 text-start overflow-hidden">
        <h2 class="mb-4">{{recipe.title}}</h2>
        <p class="mb-3">{{recipe.decription}}</p>
        <div class="d-flex justify-content-between">
        <router-link :to="{name: 'Recipe' , params: {recipeId: recipe.id } }"><button type="button" class=" btn btn-success mt-3   p-2">View Recipe</button></router-link>
   
       
        <router-link :to="{name: 'deleteRecipe' , params: {idRecipe: recipe.id } }"><button type="button" class=" btn btn-danger mt-3  p-2">Delete Recipe</button></router-link>
        </div>
    </div>
    </div>
</div>
<div v-else class="alert alert-warning mt-5"> No Recipes yet</div>
</template>
<script>

export default{
    props:["allrecipes"]
}
</script>
