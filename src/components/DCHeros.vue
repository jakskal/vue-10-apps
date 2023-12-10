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
import { ref, onMounted, computed } from "vue";
export default {
    setup() {
        const newHero = ref("");
        const newHeroRef = ref("");
        const dcHeros = ref([
            { name: "Superman" },
            { name: "Batman" },
            { name: "Aquaman" },
            { name: "Flash" },
            { name: "Super Girl" },
        ]);

        onMounted(() => {
            newHeroRef.value.focus();
        });

        const herosCount = computed({
            get: () => {
                return dcHeros.value.length;
            },
        });
        function remove(index) {
            dcHeros.value = dcHeros.value.filter((hero, i) => i != index);
        }

        function addHero() {
            if (newHero.value != "") {
                dcHeros.value.push({ name: newHero.value });
                newHero.value = "";
            }
        }

        return { dcHeros, newHero, remove, addHero, newHeroRef, herosCount };
    },
    data() {
        return {};
    },
    methods: {},
    computed: {},
    mounted() {},
};
</script>

<style>
</style>