<template>
<div>
    
<div class="ui four column centered grid" style="margin-top:150px;"> 
    <div class="column">
           
    <div class="ui top attached tabular menu" style="width:100%">
    <a v-on:click="toggleLoginView" v-bind:class="{ active : showLogin}" class="item" data-tab="first">Login</a>
    <a v-on:click="toggleSignupView" v-bind:class="{ active : !showLogin}" class="item" data-tab="second">SignUp</a>
    </div>
    
    <div v-on:click="showError=false" v-bind:class="{active:showLogin}" class="ui bottom attached tab segment" data-tab="first">
        <form v-bind:class="{error:showError,loading:performingRequest}" class="ui form" @submit.prevent>
    <h4 class="ui header" style="color:#007acc">Welcome back !</h4> 
  <div class="field">
    <label>
        <h5 class="ui grey header">
        Email
        </h5>
         </label>
    <input v-model.trim="loginForm.email" type="text" name="email" placeholder="someone@email.com">
  </div>
  <div class="field">
    <label>
        <h5>
        Password
        </h5>
        </label>
    <input v-model.trim="loginForm.password" type="password" name="password" placeholder="Password">
  </div>
  <div class="field">
    <a v-on:click="toggleSignupView" style="font-size:10px;"><b>Not a Member ? Join us then !</b></a>
</div>

 <div class="field">
  <div class="ui error message">
    <div class="header"><h5></h5></div>
    <p><h6>{{errorMessage}}</h6>
  </div>
  </div>
  {{errorMessage}}


<div class="field">
  <button v-on:click="login" class="ui inverted green button" style="float:right">Login</button>
  <a v-show="showForgotPassword" class="ui" style="font-size:10px;color:orange;"><b>Forgot Password ?</b></a> 
</div>
  
 
 
</form >
    </div>

    <div v-bind:class="{ active : !showLogin}" class="ui bottom attached tab segment" data-tab="second">
        <label>
<h4 class="ui purple header">
Join Us!
</h4>
        </label>
        <p>


<!--SIGN UP FORM -->

         <form v-bind:class="{error:showError,loading:performingRequest}" class="ui form" @submit.prevent>   
        <div class="ui mini form">
              <div class="field">
<label>Email</label>
<input v-model.trim="signupForm.email" type="text" name="email" placeholder="someone@email.com">
</div>
  <div class="field">
<label>Name</label>
<input v-model="signupForm.name" type="text" name="name" placeholder="Name">
</div>
  <div class="two fields">
<div v-bind:class="{error:!signupForm.passwordValidate}" class="field">
      <label>Password</label>
      <input v-model.trim="signupForm.pwd" v-on:keyup="clearPwdErr" placeholder="password" type="password">
    </div>
    <div v-bind:class="{error:!signupForm.passwordValidate}" class="field">
      <label>Confirm</label>
      <input v-model.trim="signupForm.cnfmpwd" v-on:keyup="match" placeholder="confirm password" type="password">
    </div>
  </div>

   <div class="field">
  <div class="ui error message">
    <div class="header"><h5>{{errorMessage.code}}</h5></div>
    <p><h6>{{errorMessage.message}}</h6>
  </div>
  </div>

  <div class="field">
  <button v-on:click="signup" class="ui submit purple button" style="float:right">Sign Up</button>
</div>

</div>
         </form>
    </div>
    </div>

</div>
</div>
</template>
<script>
const fb=require('../firebaseConfig.js')
export default {


    name:'Login',
    data:function(){
        return{
        performingRequest:false,
        showForgotPassword:false,
        showLogin : true,
        errorMessage:'',
        showError:false,
        loginForm:{
            email:'',
            password:''
        },
        signupForm :{
            email:'',
            name:'',
            pwd:'',
            cnfmpwd:'',
            passwordValidate:true
        }

        
        }
    },

    methods:{
       
        toggleSignupView:function(event){
            this.showLogin=false;
           
        },
        toggleLoginView:function(event){
            this.showLogin=true;
            
        },
        clearPwdErr(){
            this.signupForm.passwordValidate=true;
        },
        match(){
            
           if(this.signupForm.pwd!=this.signupForm.cnfmpwd){
               console.log(this.signupForm.pwd+"="+this.signupForm.cnfmpwd);
               this.signupForm.passwordValidate=false;
           }
           else this.signupForm.passwordValidate=true;
        },
        login(){
            this.performingRequest=true;
            fb.auth.signInWithEmailAndPassword(this.loginForm.email,this.loginForm.password).then(user=>{
                this.$store.commit('setCurrentUser',user.user)

                console.log("User1"+user);
                console.log("User2"+user.user);
                console.log(JSON.stringify(user.user));
                this.$store.dispatch('fetchUserProfile')
                this.$store.commit('setCurrentActiveView','dashboard')
                this.$router.push('/dashboard')
                
            }).catch(err=>{
                
                this.loginForm.email='';
                this.loginForm.password='';
                this.showForgotPassword=true;
                this.showError=true;
                this.errorMessage=err;
                
                console.log(this.showError);
                console.log("ErrorMessage :"+ this.errorMessage)
            })
            this.performingRequest=false;
        },
        signup(){
            this.performingRequest=true;
            fb.auth.createUserWithEmailAndPassword(this.signupForm.email,this.signupForm.pwd).then(user=>{
                this.$store.commit('setCurrentUser',user)
                console.log("User1fromsignup"+user);
                console.log("User2fromsignup"+user.user);
                console.log(JSON.parse(user));
                fb.userCollections.doc(uid).set({
                    name:this.signupForm.name,
                }).then(()=>{
                    this.$store.dispatch('fetchUserProfile')
                    this.$router.push('/helloworld')
                }).catch(err=>{
                   this.showError=true;
                this.errorMessage=err;
                console.log(this.showError);
                console.log("ErrorMessage :"+this.errorMessage)
                })
            })
       this.performingRequest=false;
       }

    }
    

}
</script>

<style>
input{
    background-color: white !important;
    background: white !important;
}
</style>