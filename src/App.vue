<template>
    <div>
        <navbar @search="search"></navbar>
        <div class="container" style="margin-top: 20px">
            <div class="row">
                <!--<inventory @addToCart="addToCart" :items="items"></inventory>-->
                <router-view/>
                <cart @removeCart="removeCart" :items="cart"></cart>
            </div>
        </div>
    </div>
</template>

<script>

    import Cart from "./components/Cart";
    import Navbar from "./components/Navbar";
    import Inventory from "./components/views/Inventory";
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
            },

            removeCart(index){
                //this.cart.splice(index, 1);
                this.$delete(this.cart, index);
            },

            search(keyword){
                this.items = data.filter( item => {
                    return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
                })
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
