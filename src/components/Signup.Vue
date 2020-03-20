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
        <div class="form-radio">
        <input type="radio" name="gender" id="male" checked>
        <label2 for="male">Male</label2>
        <input type="radio" name="gender" id="female">
        <label2 for="female">Female</label2>
        </div>
        <label>Faculty</label>
        <select name="faculty" id="faculty">
                    <option value=""></option>
                    <option value="soc">School of Computing</option>
                    <option value="fass">Faculty of Arts and Social Sciences</option>
										<option value="fos">Faculty of Science</option>
										<option value="biz">NUS Business School</option>
										<option value="foe">Faculty of Engineering</option>
										<option value="fod">Faculty of Dentistry</option>
										<option value="med">School of Medicine</option>
        </select> <br>
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
        msg:"Add Item",
        item:{
          name:'',
          category:''
        },
        
        
        }
  },
  methods:{
    login:  function () {
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
    width:30%;
    align-content:left;
    font-weight: bold;

}
label2{
    display: inline-block;
    margin: 20px 0 10px;
    width:30%;
    align-content:left;

}
input[type="text"]{
    display: inline-block;
    padding: 8px;
    width:50%;
}
</style>