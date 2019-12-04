import Vue from 'vue'
import Router from 'vue-router'
import Index from "./src/components/Index"
import Polls from "./src/components/Polls"
import Admin from "./src/components/Admin"
import Test from "./src/components/Test"
import Radio from "./src/components/Radio"
import Wheel from "./src/components/Wheel"
import Scene from "./src/components/Scene"
import Light from "./src/components/Light"
import SmartGr from "./src/components/SmartGr"



Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/polls/',
            name: 'polls',
            component: Polls,
            props: true,
        },
        {
            path: '/scene/',
            name: 'scene',
            component: Scene,
            props: true,
        },
        {
            path: '/light/',
            name: 'light',
            component: Light,
            props: true,
        },
        {
            path: '/smartgr/',
            name: 'smartgr',
            component: SmartGr,
            props: true,
        },
        {
            path: '/admin/',
            name: 'admin',
            component: Admin,
            props: true,
        },
        {
            path: '/radio/',
            name: 'radio',
            component: Radio,
            props: true,
        },
        {
            path: '/wheel/',
            name: 'wheel',
            component: Wheel,
            props: true,
        },
        {
            path: '/test/',
            name: 'test',
            component: Test,
            props: true,
        }
    ]
})