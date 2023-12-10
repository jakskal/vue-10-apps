<template>
    <div class="m-auto">
        <h1 class="text-2xl text-center">Dc Heros {{ herosCount }}</h1>
        <ul>
        <li
            class="flex justify-between"
            v-for="(hero, index) in dcHeros"
            :key="hero.name"
        >
            {{ hero.name }}
            <button v-on:click="remove(index)">x</button>
        </li>
        </ul>
        <h1>{{ title }}</h1>
        <form class="mt-10" @submit.prevent="addHero">
        <input
            class="border rounded"
            v-model="newHero"
            placeholder="Type Hero Name Here"
            ref="newHeroRef"
        />
        <button
            class="border rounded bg-gradient-to-t from-red-700 to-pink-500 text-white"
            type="submit"
        >
            Add Hero
        </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
        newHero: "",
        dcHeros: [
            { name: "Superman" },
            { name: "Batman" },
            { name: "Aquaman" },
            { name: "Flash" },
            { name: "Super Girl" },
        ],
        };
    },
    methods: {
        addHero() {
        if (this.newHero != "") {
            this.dcHeros.push({ name: this.newHero });
            this.newHero = "";
        }
        },
        remove(index) {
        this.dcHeros = this.dcHeros.filter((hero, i) => i != index);
        },
    },
    computed: {
        herosCount() {
        return this.dcHeros.length;
        },
    },
    mounted() {
        this.$refs.newHeroRef.focus();
    },
};
</script>

<style>
</style>