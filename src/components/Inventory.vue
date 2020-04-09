<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a class="navbar-brand" href="#">Hidden brand</a>
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

        <div class="container" style="margin-top: 20px">
            <div class="row">
                <div class="col-sm-8">
                    <div class="row">
                        <div v-for="(item, index) in items" :key="index" class="col-sm-4 single_item">
                            <div class="card">
                                <router-link :to="{ path:'/item/'+ ++index }">
                                    <img class="card-img-top" src="../assets/download.svg" alt="Card image cap">
                                </router-link>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up
                                        the
                                        bulk of the
                                        card's
                                        content.</p>
                                    <a href="#" class="btn btn-primary">Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-4">
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Morbi leo risus
                            <span>$200</span>
                            <span>
                                <img src="../assets/cros.png" alt="Remove" style="height: 20px; width: 20px;">
                            </span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Morbi leo risus
                            <span>$200</span>
                            <span>
                                <img src="../assets/cros.png" alt="Remove" style="height: 20px; width: 20px;">
                            </span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Morbi leo risus
                            <span>$200</span>
                            <span>
                                <img src="../assets/cros.png" alt="Remove" style="height: 20px; width: 20px;">
                            </span>
                        </li>
                    </ul>
                    <h5 class="float-left" style="margin-top: 10px">Total: $300</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Inventory',
        components: {},
        props: {},

        data() {
            return {
                items: 6
            }
        },

        methods: {},

        computed: {}
    }
</script>

<style>
    .single_item {
        margin-bottom: 20px;
    }
</style>
