<template>
    <div id="navBar">
    
    <div class="ui two centered column grid">
    <div class="row">
    <div class="six wide column" >

        

            <div class="ui sticky fixed card" style="left:10vw;">
  <div class="content">
      <h5 class="ui header" style="color:#007acc;margin-bottom:20px;">Hi {{name}},</h5>
    <div class="header">Whats on your mind ?</div>
    
    <div class="description">
        <div class="ui form">
  <div class="field">
    <label>Heading</label>
    <input>
  </div>
 
  <div class="field">
    <label>Body</label>
    <textarea></textarea>
  </div>
 
</div>
    </div>
  </div>
  <div class="extra content">
 <button class="ui button red inverted">Submit</button> 
  </div>
</div>
        </div>
    
     <div class="ten wide column" style="margin-left:0 !important">

          <div class="ui">
              <div class="ui grid container" style="width:90%;">
        
              <PostData postHeading="Once upon a time " postBody="ajshdbjfbsjdbfjdbjfdjfdjfjdvfjdffv" v-bind:postLikes="6" v-bind:postComments="7"></PostData>
              
              </div>
        </div>
    </div>
    
    </div>
    
   
  
    </div>
</div>
    </template>

<script>

export default{

    name : 'DashBoard',
    data(){
        return{
        name:'Bagio'
        }
    },
    methods:{

    }

}
</script>
<style>
.ui.card, .ui.cards>.card{
    width:20% !important;
}
</style>