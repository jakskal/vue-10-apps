<template>
  <AppHeader :isLoggedIn="isLoggedIn" @open-login-modal="isLoginOpen = true" />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <teleport to='body' >
  <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false"/>
  </teleport>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import LoginModal from "./components/LoginModal.vue";
import firebase from './utilities/firebase'
export default {
  name: "App",
  components: { AppHeader, LoginModal },
  methods: {},
  computed: {},
  data() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: {},
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged( (user) => {
      if(user){
        this.isLoggedIn = true;
        this.authUser = user;
        console.log(user);
      }else {
        this.isLoggedIn = false;
        this.authUser = {};
        console.log("no user")
      }
    })
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
