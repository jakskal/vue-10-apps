<template>
    <div class="flex w-full flex-wrap">
        <h1 class="w-full text-center text-3xl my-4">Markdown App</h1>
        <section class="flex m-auto w-10/12 h-screen">
            <article class="w-1/2 border">
                <textarea class=" w-full h-full" v-model="text" ref="markdownTextArea"></textarea>
            </article>
            <article class="w-1/2 border bg-gray-100" >{{ text }}</article>
        </section>
    </div>
</template>

<script>
// import { marked } from "marked";
// import Vue from 'vue'


export default {
    data() {
        return {
                text:"",
        }
    },
    computed:{
        // markedText(){
        //     return marked.parse("something")
        // }
    },
    mounted() {
        this.$refs.markdownTextArea.focus();
    },
};
</script>

<style>
</style>