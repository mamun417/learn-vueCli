<template>
    <div class="col-sm-4">
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <h5>Title</h5>
                <h5><span>Price</span></h5>
                <h5><span>Action</span></h5>
            </li>

            <li v-for="(item, index) in items" class="list-group-item d-flex justify-content-between align-items-center">
                {{ item.title }}
                <span>${{ item.price }}</span>
                <span @click="removeCart(index)" class="btn">
                    <img src="../assets/cros.png" alt="Remove" style="height: 20px; width: 20px;">
                </span>
            </li>

            <li class="list-group-item d-flex justify-content-between align-items-center">
                <h5 class="float-left" style="margin-top: 10px">Total: ${{ getTotal }}</h5>
                <span>
                    <a v-if="items.length" @click="$store.commit('clearCart')" href="#" class="btn btn-success">Checkout</a>
                </span>
            </li>

        </ul>
    </div>
</template>

<script>

    export default {
        name: 'Cart',
        components: {},
        props: {
            /*items:{
                type: Array,
                default: () => ({})
            }*/
        },

        data() {
            return {

            }
        },

        methods: {
            removeCart(index){
                //this.items.splice(index, 1);
                //this.$emit('removeCart', index);
                this.$store.commit('removeCart', index);
            }
        },

        computed: {
            items(){
                return this.$store.getters.getCart; // can be use into data {items: this.$store.getters.getCart}
            },

            getTotal(){
                let total = 0;

                this.items.forEach( (item, index) => {
                    total += parseFloat(item.price);
                });

                return total.toFixed(2);
            }
        }
    }
</script>

