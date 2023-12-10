
import  { createRouter, createWebHistory } from 'vue-router'
import DCHeros from './pages/DCHeros.vue'
import CalenderVue from './pages/Calender.vue';
import Home from './pages/Home.vue';
import Markdown from './pages/Markdown.vue';
import Slider from './pages/Slider.vue';
import Calculator from './pages/Calculator.vue';
import ReusableModal from './pages/ReusableModal.vue';
import Chat from './pages/Chat.vue';
import UserCrud from './pages/UserCrud.vue';
import store from './store';

const routes = [
    {path:'/', component:Home},
    {path:'/dc-heros', component:DCHeros},
    {path:'/calendar', component:CalenderVue},
    {path:'/markdown', component:Markdown},
    {path:'/slider-carousel', component:Slider},
    {path:'/Calculator', component:Calculator},
    {path:'/reusable-modal', component:ReusableModal},
    {path:'/chat', component:Chat,
    meta:{middleware:"auth"}},
    {path:'/user-crud', component:UserCrud},

]
    
const router = new createRouter({
    history: createWebHistory(),
    routes,
})
router.beforeEach((to, from,next) => {
    if(to.meta.middleware){
        
        const middleware = require(`./middleware/${to.meta.middleware}`)
        if(middleware){
            middleware.default(next, store)
        }else{
            next()
        }

    }else{
        next()
    }
})
export default router;