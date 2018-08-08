import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import HelloWorld from '@/components/HelloWorld'
import DashBoard from '@/components/DashBoard'
import Login from '@/components/Login'
import { mapGetters } from '../../node_modules/vuex';


Vue.use(Router)

const router= new Router({
  mode:'history',
  routes: [
    {
      path: '*',
      redirect:'/helloworld'

    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'DashBoard',
      component: DashBoard,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{
        requireAuth:true
      }
    }
  ]
})

router.beforeEach((to,from,next)=>{
  const currentUser=firebase.auth().currentUser;
  const requireAuth=to.matched.some(x=>x.meta.requireAuth)

  if(!currentUser&&requireAuth){
    next('/')
    console.log("Unknown user routed to login page");
    }
  else if(currentUser&&requireAuth){
    
    console.log("authorised user logged in"+JSON.stringify(currentUser));
    
    next()
  }
  else next()
})

export default router