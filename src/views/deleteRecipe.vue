<template>
    
      <div class="row ">
          <div class="col-auto  mx-auto ">
            <h1 class="mt-3">Delete recipe # {{title}}</h1>
            <hr />
            <p class="text-danger text-center">do you want realy delete this recipe?</p>
            
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-auto mx-auto ">
            <button class="btn btn-info me-3" @click="goback()">Go Back</button>
            
            <button class="btn btn-danger" @click="deleteRecipe()">
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
  export default{
    data(){
      return {
        idRecipe: this.$route.params.idRecipe ,
        title: "",
        msg:{},
        recipe: ""
      }
    },
  async  mounted(){
    
    this.getrecipe()
    
    
  },
    methods:{
      async getrecipe(){
          let result = await axios.get(`http://localhost:3000/recipes?id=${this.idRecipe}`);
          if(result.status == 200 && result.data.length > 0){
             
              this.recipe = result.data;
              this.title = this.recipe[0].title;
          
           
          }else{
              console.log("erorr")
          }
      },
  goback(){
    this.$router.push({ name: "home"});
  },
  async deleteRecipe() {
      
          let result = await axios.delete(`http://localhost:3000/recipes/${this.idRecipe}`);
          if (result.status == 200) {
              this.msg.success = "Recipe Deleted Successfully"
              setTimeout(()=>{
                this.msg.success = "";
                this.$router.push({ name: "home"});
          },2000)
              
          } else {
             this.msg.error = "something went wrong try again";
             setTimeout(()=>{
                this.msg.error = "";
                
          },2000)
          }
      
  }
  }
  }
  
  </script>
  