<template>
    <div>
        <section
            @click="close"
            class="z-20 h-screen w-screen bg-gray-400 fixed top-0 opacity-50"
        ></section>
        <div class="absolute inset-0">
            <div class="flex h-full">
                <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
                    <div class="p-2 border">
                        <h1 class="text-2xl text-center">Login</h1>
                        <GoogleLogin @close-login-from-google="close"/>
                        <p class="my-5 text-center">OR</p>
                        <form class="p-2 my-2" @submit.prevent="submit">
                            <div class="my-2">
                                <label>Email or Username</label>
                                <input
                                    class="rounded shadow p-2 w-full"
                                    placeholder="Enter email or username"
                                    v-model="email"
                                    ref="emailRef"
                                />
                            </div>
                            <div class="my-2">
                                <label for="">password</label>
                                <input
                                    class="rounded shadow p-2 w-full"
                                    type="password"
                                    placeholder="Enter your password"
                                    v-model="password"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white"
                                >
                                    <span v-if="!isLoading"> Login </span>
                                    <span v-else>Loggin in ...</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from "../utilities/firebase.js";
import GoogleLogin from "../components/Login/Google.vue"
// import auth from 'firebase/auth';

export default {
    components: {GoogleLogin},
    methods: {
        submit() {
            this.isLoading = true;
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    this.email = "";
                    this.password = "";
                    this.isLoading = false;
                    this.close();
                })
                .catch((e) => {
                    console.log(e);
                    this.isLoading = false;
                });
        },
        close() {
            this.$emit("close-login");
        },
        
    },
    data() {
        return {
            email: "user1@gmail.com",
            password: "password",
            isLoading: false,
        };
    },
    mounted() {
        this.$refs.emailRef.focus();
    },
};
</script>

<style>
</style>