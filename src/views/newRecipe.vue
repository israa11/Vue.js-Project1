<template>
    <div class="d-flex flex-column mt-5 mx-auto w-50">
        
        <h2 class="text-center mb-3">New Recipe</h2>
        <div class="text-center">
            <div class="alert alert-success "  v-if="msg.success">{{msg.success}}</div>
            <div class="alert alert-danger"  v-if="msg.error">{{msg.error}}</div>
            </div>
        <form @submit.prevent="addrecipe()">
    <div>
        <label  class="form-label">Tile</label>
        <input type="text" class="form-control" v-model="title">
        </div>
   
        
            <div class="mt-3">
                <label  class="form-label">Description</label>
                <input type="text" class="form-control" v-model="description" >
                </div>
                <div class="mt-3">
                    <label class="form-label">ingredients</label>
                    <textarea type="text" class="form-control" v-model="ingredients" ></textarea>
                    </div>
                    <div class="mt-3">
                        <label  class="form-label">Method</label>
                        <textarea type="text" class="form-control" v-model="method" ></textarea>
                        </div>
                        <div class="d-flex justify-content-center mt-3"><button  type="button" class="btn btn-info me-3" @click="goback()">Go back</button>
                            <button  type="submit" class="btn btn-info" >Add recipe</button></div>
                        </form>
                    </div>
                    
</template>
<script>

import axios from "axios"
export default{
    data(){
return{
    title: "",
    
    description: "",
    ingredients: "",
    method: "",
    arr:[],
    msg:{},
    id:"",
}
    },
   
    methods:{
        goback(){
            this.$router.push({ name: "home"});
        },
async addrecipe(){
    if(this.title  && this.description && this.ingredients && this.method){
let result = await axios.post("http://localhost:3000/recipes",{
    title: this.title,
    
    decription: this.description,
  ingredients: this.ingredients,
  method: this.method,
  
})
    
    if(result.status == 201 ) {
       this.msg.success = "Added Recipe Successfully",
       this.title = "",
this.description = "",
this.ingredients = "", 
this.method = "",
       setTimeout(()=>{
        this.msg.success = "";
        this.$router.push({ name: "home"});
       },2000)
        

    }


    }else{
        this.msg.error = "please fill all files"
        setTimeout(()=>{
this.msg.error = ""
        }, 1000)
    }
}
    }
}
</script>
