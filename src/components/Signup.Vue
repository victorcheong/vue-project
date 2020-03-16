<template>
  <div id=app>
    <head>
      <title>Project Mates</title>
    </head>
    <h1>Create Your Own Account</h1>
    <form id="signup">
        <label>Name</label>
        <input type="text" v-model.lazy="item.name" required/>
        <label>NUS Email</label>
        <input type="text" v-model.lazy="item.category"/>
        <label>Password</label>
        <input type="text" v-model.lazy="item.category"/>
        <label>Gender</label>
        <input type="text" v-model.lazy="item.category"/>
        <label>Faculty</label>
        <input type="text" v-model.lazy="item.category"/>
        <label>Major</label>
        <input type="text" v-model.lazy="item.category"/>
        <br>
        <button v-on:click.prevent="signup">Submit Form</button>
    </form>
  </div>
</template>

<script>

import database from '../firebase.js'
export default {

  data(){
    return{
        msg:"Sign up",
        User Info:{
          Awards:{},
          Current Modules:{},
          Email:"",
          Password:"",
          Faculty:"",

        },
        
        
        }
  },
  methods:{
    signup:  function () {
          //Save item to database
          database.collection('items').doc().set(this.item);
          this.item.name="";
          this.item.category="";
          alert("I am in the DB .... :-) Item saved successfully")
          
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app *{
    box-sizing: border-box;
}
#app{
    margin: 20px auto;
    max-width: 500px;
}

p{
    align-content: center;
    color:ivory;
}
label{
    display: inline-block;
    margin: 20px 0 10px;
    width:50%;
    align-content:left;

}
input[type="text"]{
    display: inline-block;
    padding: 8px;
    width:50%;
}
</style>