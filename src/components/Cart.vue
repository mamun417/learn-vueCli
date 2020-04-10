<template>
    <div class="col-sm-4">
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Title
                <span>Price</span>
                <span>Action</span>
            </li><br>

            <li v-for="(item, index) in items" class="list-group-item d-flex justify-content-between align-items-center">
                {{ item.title }}
                <span>${{ item.price }}</span>
                <span @click="removeCart(index)" class="btn">
                    <img src="../assets/cros.png" alt="Remove" style="height: 20px; width: 20px;">
                </span>
            </li>
        </ul>
        <h5 class="float-left" style="margin-top: 10px">Total: ${{ getTotal }}</h5>
    </div>
</template>

<script>

    export default {
        name: 'Cart',
        components: {},
        props: {
            items:{
                type: Array,
                default: () => ({})
            }
        },

        data() {
            return {

            }
        },

        methods: {
            removeCart(index){
                //this.items.splice(index, 1);
                this.$emit('removeCart', index);
            }
        },

        computed: {

            getTotal(){
                let total = 0;

                this.items.forEach( (item, index) => {
                    total += parseFloat(item.price);
                });

                return total;
            }
        }
    }
</script>

