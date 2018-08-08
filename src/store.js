import Vue from 'vue'
import Vuex from 'vuex'
const fb=require('./firebaseConfig')
Vue.use(Vuex)

export const store =new Vuex.Store({
    state:{
        currentUser:'',
        userProfile:{},
        activeView:'login'
    },
    actions:{
        fetchUserProfile({commit,state}){
            fb.userCollections.doc(state.currentUser.uid).get().then(responseFromFirebase=>{
                commit('setCurrentUserProfile',responseFromFirebase.data())
            }).catch(err=>{console.log(err)})
        },
        clearData({commit,state}){
            commit('setCurrentUser',null);
            commit('setCurrentUserProfile',{});
        }
    },
    mutations:{
        setCurrentUser(state,user){
            state.currentUser=user
        },
        setCurrentActiveView(state,view){
            console.log("store view is :"+view)
            state.activeView=view;
        },
        setCurrentUserProfile(state,profile){
            state.userProfile=profile
        }

    },
    getters:{
        getCurrentActiveState: state=>state.activeView,
        getCurrentUser: state=>state.currentUser
    }
})

