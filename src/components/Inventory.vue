<template>
    <div class="col-sm-8">
        <div class="row">
            <div v-if="items.length > 0" v-for="(item, index) in items" :key="index" class="col-sm-4 single_item">
                <div class="card">
                    <!-- <router-link :to="{ path:'/item/'+ ++index }">
                         <img class="card-img-top" src="./assets/download.svg" alt="Card image cap">
                     </router-link>-->
                    <img class="card-img-top" :src="item.photo" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <p class="card-text">{{ item.description.substring(0, 20) }}</p>
                        <p class="card-text">Price: {{ item.price }}</p>
                        <a @click="addToCart(item)" href="#" class="btn btn-primary">Add To Cart</a>
                    </div>
                </div>
            </div>
            <div v-if="items.length === 0">
                <h3>No item found</h3>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Inventory',
        components: {},
        props: {
            items: {
                type: Array,
                default: () => ({})
            },
        },

        data() {
            return {

            }
        },

        methods: {
            addToCart(item){
                this.$emit('addToCart', item);
            }
        },

        computed: {}
    }
</script>

<style>
    .single_item {
        margin-bottom: 20px;
    }
    .card {
        height: 450px;
    }
</style>
