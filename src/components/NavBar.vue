<template>
  
<div class="ui top fixed menu">
<img src="../assets/logo.png" height=30 width=30 style="margin-left:10px;float:left;margin-top:10px;">
<div class="ui left item" style="margin-left:0px;">
    <h5>
    Vuegram
    </h5>
</div>

<div class="right menu">
  <a v-if="(activeView!='login')" v-bind:class="{'activeV':(activeView=='dashboard')}"  style="font-size:12px;" class="ui item">
      <i class="newspaper icon">
    </i>
    Dashboard
      
    </a>
  <a v-if="(activeView!='login')" v-bind:class="{'activeV':(activeView=='settings')}"  style="font-size:12px;" class="ui item"><i class="cogs icon"></i>Settings</a>
  <a v-if="(activeView=='login')" class="ui item"  style="font-size:12px;"><i class="user icon"></i>Login/SignUp</a>
  <a v-on:click="logout" v-else class="ui item"  style="font-size:12px;"><i class="power off icon"></i>Log Out</a>
  </div>
</div>
</template>

<script>

import {mapGetters} from 'vuex';
const fb=require('../firebaseConfig');

export default{

    name : 'NavBar',
    data(){
        return{
        
        name:'Bagio'
        }
    },
    created:function(){
        console.log(this.$store.state.activeView);
     this.activeView=this.$store.state.activeView;
    },
    computed:{
        ...mapGetters({
          activeView:'getCurrentActiveState'  
        })
    },
  methods:{
      logout(){
          alert("You are logging out");
          fb.auth.signOut().then(()=>{
          console.log("inside LogOut Method");
          this.$store.dispatch('clearData');
          this.$store.commit('setCurrentActiveView','login');
          this.$router.push('/');
          }).catch(err=>{
              alert("Unhandled Error:"+err);
              });
          
      }
     
     }
  }

</script>

<style>
.activeV{
    color:#007acc !important;
    
}
.ui.menu .item{
    padding-top:20px !important;
    padding-bottom:20px !important;
}
.icon{
    font-size:18px !important;
}

</style>
