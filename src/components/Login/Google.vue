<template>
                          <section class="my-5 text-center">
                            <button class="border" @click="loginWithGoogle">
                                Login With Google
                            </button>
                        </section>
</template>

<script>

import firebase from '../../utilities/firebase';

export default {
    methods: {
        loginWithGoogle() {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase
                .auth()
                .signInWithPopup(provider)
                .then(() => {
                    this.$emit("close-login-from-google");
                })
                .catch(() => {
                    // Handle Errors here.
                    // var errorCode = error.code;
                    // var errorMessage = error.message;
                    // // The email of the user's account used.
                    // var email = error.email;
                    // // The firebase.auth.AuthCredential type that was used.
                    // var credential = error.credential;
                    // ...
                });
        },
    },

}
</script>

<style>

</style>