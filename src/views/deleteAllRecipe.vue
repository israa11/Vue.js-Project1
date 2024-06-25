<template>
    <div class="row">
        <div class="col-auto  mx-auto ">
          <h1 class="mt-3">Delete All Recipe</h1>
          <hr />
          <p class="text-danger text-center">do you want realy delete all recipes?</p>
          
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-auto  mx-auto">
          <button type="button" class="btn btn-info me-3" @click="goback()">Go Back</button>
          
          <button  type="button" class="btn btn-danger" @click="deleteallRecipes()">
            Delete Now
          </button>
        </div>
      </div>
      <div class="text-center mt-4">
        <div class="alert alert-success "  v-if="msg.success">{{msg.success}}</div>
        <div class="alert alert-danger"  v-if="msg.error">{{msg.error}}</div>
        </div>
</template>
<script>
import axios from "axios"
export default {
  data(){
return{
  listallrecipes:[],
  msg:{}
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
          
        this.listallrecipes.push(result.data[i].id)
       }
      console.log(this.listallrecipes) 
    }else{
        console.log("erorr")
    }
},
    goback(){
  this.$router.push({ name: "home"});
},
 async deleteallRecipes(){
  let allidRecipe=[]
for(let i =0; i <this.listallrecipes.length; i++){
  
  let result = await axios.delete(`http://localhost:3000/recipes/${this.listallrecipes[i]}`);
  if(result.status == 200){
allidRecipe.push(true)
  }else{
   allidRecipe.push(false)
 }
 
}
if(!allidRecipe.includes(false)){
  this.msg.success = "All Recipes Deleted Successfully"
  setTimeout(()=>{
    this.msg.success = ""
    this.$router.push({ name: "home"});
  },2000)
  
}else{
  this.msg.error = "something went wrong try again"
  setTimeout(()=>{
    this.msg.error = "";
  },2000)
}


}
  }  
}
</script>