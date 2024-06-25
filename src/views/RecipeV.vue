<template>
	<div v-if="recipe" class="m-5">
		<h2>{{title}}</h2>
		<p>{{decription}}</p>
		<hr>
		<div class="card w-75 mt-5 mb-4 bg-dark">
			<div class="card-body">
			<h5 class="card-title text-white">Ingredients</h5>
			<p class="card-text text-white">{{ingredients}}</p>
			
			</div>
		</div>	
	
		
	<div class="card w-75 mt-5 mb-4 bg-dark">
		<div class="card-body">
		<h5 class="card-title text-white">Method</h5>
		<p class="card-text text-white">{{method}}</p>
		
		</div>
	</div>

<router-link :to="{name: 'home'}"><button  type="button" class="btn btn-info">Go Back</button></router-link>

	</div>
</template>
<script>
import axios from "axios"
export default {
	data(){
return{
	recipeId: this.$route.params.recipeId ,
	
	recipe: [],
	title: "",
	decription : "",
	method: "",
	ingredients: ""
}
	},
async mounted(){
		
	this.getrecipe()
	
	},
	methods:{
		async getrecipe(){
        let result = await axios.get(`http://localhost:3000/recipes?id=${this.recipeId}`);
        if(result.status == 200 && result.data.length > 0){
			
			this.recipe = result.data;
			
			this.title = this.recipe[0].title;
			this.decription = this.recipe[0].decription;
			this.method = this.recipe[0].method;
			this.ingredients = this.recipe[0].ingredients;
           
        }else{
            console.log("erorr")
        }
    }
	}
}
</script>