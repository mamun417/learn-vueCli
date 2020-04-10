<template>
    <div class="col-sm-8">
        <div class="row">
            <!-- Page Content -->
            <div class="container" style="text-align: left">

                <!-- Portfolio Item Row -->
                <div class="row">

                    <div class="col-md-6">
                        <img class="img-fluid" src="http://placehold.it/750x500" alt="">
                    </div>

                    <div class="col-md-6">
                        {{ $route.params.id }}
                        <h3>Description</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida
                            pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec
                            metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
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
            return {}
        },

        methods: {},

        computed: {}
    }
</script>
