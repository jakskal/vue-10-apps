<template>
    <nav
        class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2"
    >
        <router-link v-for="item in lists"  class="mx-2" v-bind:to="item.to" :key="item.title">{{ item.title}}</router-link>
        <button class="mx-2" @click="logout" v-if="isLoggedIn">LogOut</button>
        <button class="mx-2" @click="$emit('open-login-modal')" v-else>Login</button>

    </nav>
</template>

<script>
import firebase from '../utilities/firebase';
export default {
  props: {"isLoggedIn":{type:Boolean, default:false}},
  data() {
    return {
      lists:[
        {title:"DC Heroes", to:"/dc-heros"},
        {title:"Calendar", to:"/calendar"},
        {title:"Markdown", to:"/markdown"},
        {title:"Slider Carousel", to:"/slider"},
      ]
    }
  },
  methods: {
    logout(){
      firebase.auth().signOut().then((res)=>{console.log(res);}).catch((e)=> {console.log(e);});
    },
  },
};
</script>

<style>
</style>