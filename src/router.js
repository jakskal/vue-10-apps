
import  { createRouter, createWebHistory } from 'vue-router'
import DCHeros from './pages/DCHeros.vue'
import CalenderVue from './pages/Calender.vue';
import Home from './pages/Home.vue';
import Markdown from './pages/Markdown.vue';
import Slider from './pages/Slider.vue';
import Calculator from './pages/Calculator.vue';
import ReusableModal from './pages/ReusableModal.vue';
import Chat from './pages/Chat.vue';
const routes = [
    {path:'/', component:Home},
    {path:'/dc-heros', component:DCHeros},
    {path:'/calendar', component:CalenderVue},
    {path:'/markdown', component:Markdown},
    {path:'/slider-carousel', component:Slider},
    {path:'/Calculator', component:Calculator},
    {path:'/reusable-modal', component:ReusableModal},
    {path:'/chat', component:Chat},

]

const router = new createRouter({
    history: createWebHistory(),
    routes,
})

export default router;