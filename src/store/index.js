import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
        addToCart: (state, payload) => {
            state.cart.push(payload);
        },

        removeCart: (state, payload) => {
            //state.cart.splice(payload, 1);
            Vue.delete(state.cart, payload);
        },
    }
})
