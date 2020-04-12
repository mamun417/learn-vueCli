<template>
    <div class="col-sm-8">
        <div class="row">
            <!-- Page Content -->
            <div class="container" style="text-align: left">

                <!-- Portfolio Item Row -->
                <div class="row">

                    <div class="col-md-6">
                        <img class="img-fluid" :src="item.photo" alt="">
                    </div>

                    <div class="col-md-6">
                        <h3>Description</h3>
                        <p>{{ item.description }}</p>

                        <h3>Title</h3>
                        <p>{{ item.title }}</p>

                        <h3>Price</h3>
                        <p>${{ item.price }}</p>

                        <a @click="addToCart(item)" href="#" class="btn btn-primary float-right">Add To Cart</a>

                    </div>
                </div>
                <!-- /.row -->

                <!-- Related Projects Row -->
                <h3 class="my-4">Related Projects</h3>

                <div class="row">

                    <div class="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                            <img class="img-fluid" src="http://placehold.it/500x300" alt="">
                        </a>
                    </div>

                    <div class="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                            <img class="img-fluid" src="http://placehold.it/500x300" alt="">
                        </a>
                    </div>

                    <div class="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                            <img class="img-fluid" src="http://placehold.it/500x300" alt="">
                        </a>
                    </div>

                    <div class="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                            <img class="img-fluid" src="http://placehold.it/500x300" alt="">
                        </a>
                    </div>

                </div>
                <!-- /.row -->

            </div>
            <!-- /.container -->
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Details',
        components: {},
        props: {},

        data() {
            return {
                item: {}
            }
        },

        mounted() {
            let self = this;
            axios.get(apiUrl+'/item/'+this.$route.params.id)
                .then(function (response) {
                    self.item = response.data;
                });
        },

        methods: {
            addToCart(item){
                this.$store.commit('addToCart', item); // can be call from @click
            }
        },

        computed: {}
    }
</script>
