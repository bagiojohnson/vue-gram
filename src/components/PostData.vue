<template>

<div class="row">
<div class="column" id="postContainer">

<div class="ui container">
<h4 style="padding-top:10px;padding-bottom:0px;">
{{postHeading}}
</h4>
<div id="footer">
<i class="heart red icon"></i>
<p style="display:inline"> {{postLikes}} Likes</p>
<i class="comment green icon"></i>
<p style="display:inline"> {{postComments}} Comments</p>
</div>
<p style="color:grey">
    {{postBody}}
</p>


</div>


</div>
</div>


</template>

<script>

export default{
    name:'PostData',
    props:{
        postHeading:String,
        postBody:String,
        postLikes:Number,
        postComments:Number
    },
    data(){
        return{
        }
    }

}
</script>

<style>
#postContainer{
width:90%;
background:white;
height:120px;
border:1px solid lightgrey;
border-radius:5px;
overflow:auto;
}
#postContainer:hover{
    border:1px solid #007acc;
    color:#007acc;
}
#footer{
font-size :9px !important;
font-weight:bold;
margin-bottom:10px;
}
.icon{
 font-size:10px !important;   
}
</style>