<template>
    <div class="container bg-white d-flex flex-wrap justify-content-center p-5">

        <div v-for="card in store.cards" :key="card.id" class="card m-3 f-d-card">
            <img class="card-img-top" :src="card.card_images[0].image_url" alt="Card image cap">
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title text-center">{{ card.name }}</h5>
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    </div>
</template>

<script>
    import { store } from '../store.js';
    export default {
        name: 'CardComponent',
        data () {
            return {
                store 
            }
        }
    }
</script>

<style lang="scss" scoped>
    .f-d-card {
        width: 200px;
        height: 600px;
        background-color: #C68636;
    }
</style>