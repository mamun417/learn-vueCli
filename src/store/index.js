import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import createPersistedState from "vuex-persistedstate";

export default new Vuex.Store({
    state: {
        inventory: [],
        cart: [],
        /*cart:{
            type: Array,
            default: () => ({})
        }*/
    },

    getters: {
        getInventory: state => {
            return state.inventory;
        },

        getCart: state => {
            return state.cart;
        },
    },

    mutations: {
        setInventory: (state, payload) => {
            state.inventory = payload;
        },

        addToCart: (state, payload) => {
            state.cart.push(payload);
        },

        removeCart: (state, payload) => {
            //state.cart.splice(payload, 1);
            Vue.delete(state.cart, payload);
        },

        clearCart: state => {
            if (confirm('Are you sure to checkout ?'))
            state.cart = [];
        }
    },

    actions: {
        addToCart(context, payload){
            context.commit('addToCart', payload);
        }
    },

    plugins: [createPersistedState()],
})
