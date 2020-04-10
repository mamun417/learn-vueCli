<template>
    <div class="col-sm-4">
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Title
                <span>Price</span>
            </li><br>

            <li v-for="(item, index) in items" class="list-group-item d-flex justify-content-between align-items-center">
                {{ item.title }}
                <span>{{ item.price }}</span>
                <span>
                    <img src="../assets/cros.png" alt="Remove" style="height: 20px; width: 20px;">
                </span>
            </li>
        </ul>
        <h5 class="float-left" style="margin-top: 10px">Total: $300</h5>
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

        methods: {},

        computed: {}
    }
</script>

