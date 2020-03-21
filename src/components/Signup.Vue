<template>
        </div>
        <label>Faculty</label>
        <select name="faculty" id="faculty">
                    <option value=""></option>
                    <option value="soc">School of Computing</option>
                    <option value="fass">Faculty of Arts and Social Sciences</option>
										<option value="fos">Faculty of Science</option>
										<option value="biz">NUS Business School</option>
										<option value="foe">Faculty of Engineering</option>
  <div class="signup">
    <h1>Start to Create Your Account !</h1>
        <label>Your Email</label>
        <input type="text" v-model="email" required/>
        <label>Your Password</label>
        <input type="password" v-model="password" required/>
        <br>
        <button @click="signup">Sign Up</button>
  </div>
</template>

<script>

import firebase from 'firebase';


export default {
  name:"signup",
  data(){
    return{
          email:'',
          password:''
    }
  },
  methods:{
    signup:  function () {
          //Save item to database
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
  .then(function() {
    alert('You have created an account');
  });
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