
import  { createRouter, createWebHistory } from 'vue-router'
import DCHeros from './components/DCHeros.vue'
import CalenderVue from './components/Calender.vue';
import Home from './components/Home.vue';
import Markdown from './components/Markdown.vue';
import Slider from './components/Slider.vue';
const routes = [
    {path:'/', component:Home},
    {path:'/dc-heros', component:DCHeros},
    {path:'/calendar', component:CalenderVue},
    {path:'/markdown', component:Markdown},
    {path:'/Slider', component:Slider},

]

const router = new createRouter({
    history: createWebHistory(),
    routes,
})

export default router;