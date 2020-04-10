<!--<template>
  <div id="app">
    &lt;!&ndash;<img src="./assets/logo.png">&ndash;&gt;
    <router-view title="other"/>
  </div>
</template>-->

<template>
    <div>
        <navbar></navbar>
        <div class="container" style="margin-top: 20px">
            <div class="row">
                <inventory @addToCart="addToCart" :items="items"></inventory>
                <cart :items="cart"></cart>
            </div>
        </div>
    </div>
</template>

<script>

    import Cart from "./components/Cart";
    import Navbar from "./components/Navbar";
    import Inventory from "./components/Inventory";
    import data from './data';

    export default {
        name: 'App',
        components: {Inventory, Navbar, Cart},

        data() {
            return {
                items: [],
                cart: [],
            }
        },

        mounted() {
            this.items = data;
        },

        methods: {
            addToCart(item){
                this.cart.push(item);
            }
        },

        computed: {}
    }
</script>

<style>
    .single_item {
        margin-bottom: 20px;
    }
</style>
