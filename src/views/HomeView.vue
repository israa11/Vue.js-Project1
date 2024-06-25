<template>
  <div class="text-center">
<router-link :to="{name: 'newRecipe'}"><button type="button" class="btn btn-light p-2 mt-4">Add new recipe</button></router-link>

<allrecipe-view :allrecipes="listallrecipes"></allrecipe-view>
</div>
</template>
<script>


import allrecipeView from "./allrecipeView.vue"
import axios from "axios"
export default{
  components:{

allrecipeView 
  },
  data(){
  return{

listallrecipes:[]
  }
},
async  mounted(){
  
  this.getAllrecipes();
  
},

methods:{

async getAllrecipes(){
    let result = await axios.get("http://localhost:3000/recipes");
    if(result.status == 200 && result.data.length > 0){
        for(let i = 0; i <result.data.length ; i++){
          
        this.listallrecipes.push(result.data[i])
       }
       }else{
        console.log("erorr")
    }
}
}

}

</script>

