<template>
    <div class="col-sm-8">
        <div v-if="!loading" class="row">
            <div v-for="(item, index) in items" :key="index" class="col-sm-4 single_item">
                <div class="card">
                    <router-link :to="{ path:'/item/'+ ++index }" title="Item Details">
                        <img class="card-img-top" :src="item.photo" alt="Card image cap">
                    </router-link>
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <p class="card-text">{{ item.description.substring(0, 20) }}</p>
                        <p class="card-text">Price: {{ item.price }}</p>
                        <a @click="addToCart(item)" href="#" class="btn btn-primary">Add To Cart</a>
                        <!--<a @click="$store.commit('addToCart', item)" href="#" class="btn btn-primary">Add To Cart</a>-->
                    </div>
                </div>
            </div>
          <!--  <div v-if="getInventory.length === 0">
                <h3>No item found</h3>
            </div>-->
        </div>
        <h2 v-else >Loading...</h2>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex'

    export default {
        name: 'Inventory',
        components: {},
        props: {},

        data() {
            return {
                //items: [],
                loading: true,
            }
        },

        computed: {
            items(){
                return this.$store.getters.getInventory;
            }

           /* ...mapGetters({
                'items': 'getInventory',
            })*/
        },

        mounted() {
            this.fetchInventory();
        },

        methods: {
            addToCart(item) {
                //this.$emit('addToCart', item);
                //this.$store.commit('addToCart', item); // can be call from @click // for mutations
                this.$store.dispatch('addToCart', item); // can be call from @click // for actions
            },

            fetchInventory() {
                let self = this;
                axios.get(apiUrl+'/items')
                    .then(function (response) {
                        //self.items = response.data;
                        self.$store.commit('setInventory', response.data);
                        self.loading = false;
                    });
            }
        }
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
