import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Inventory from "../components/Inventory";
import Details from "../pages/Details";

Vue.use(Router)

export default new Router({
    mode: 'history',
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
