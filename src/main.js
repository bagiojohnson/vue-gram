// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import navbar from './components/NavBar'
import postdata from './components/PostData'
import {store} from './store'

const fbase = require('./firebaseConfig')

Vue.config.productionTip = false

Vue.component('NavBar',navbar);
Vue.component('PostData',postdata);

/*handles Refresh Page*/
let app
fbase.auth.onAuthStateChanged(user=>{
  if(!app){
  app=new Vue({
    el: '#app',
    router,
    store,
    render: h=>h(App)
      }) 
    }
  })

