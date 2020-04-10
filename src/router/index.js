import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Inventory from "../components/views/Inventory";
import Details from "../components/views/Details";

Vue.use(Router)

export default new Router({
    mode: 'history', // 'hash' (default), 'history'
    routes: [
        {
            path: '/todo',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/',
            name: 'Inventory',
            component: Inventory
        },
        {
            path: '/item/:id',
            name: 'Details',
            component: Details
        },
    ]
})
