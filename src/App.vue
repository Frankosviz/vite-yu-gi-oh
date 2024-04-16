<template>
  <LoaderComponent/>
  <HeaderComponent/>
  <SearchBarComponent />
  <CardListComponent/>
  <CardComponent/>
</template>

<script>
// Ricordarsi di importare lo store
import { store } from './store.js';
// Se la chiamata la vogliamo fare in AppVue dobbiamo importare axios.. Quindi
import axios from 'axios';
// Adesso importiamo il resto dei componenti
import LoaderComponent from './Components/LoaderComponent.vue';
import HeaderComponent from './Components/HeaderComponent.vue';
import SearchBarComponent from './Components/SearchBarComponent.vue';
import CardListComponent from './Components/CardListComponent.vue';
import CardComponent from './Components/CardComponent.vue';
  export default {
    name: 'App',
    components : {
      LoaderComponent,
      HeaderComponent,
      SearchBarComponent,
      CardListComponent,
      CardComponent
    },
    data() {
      return {
        store
      }
    },
    created () {
      axios
        .get(store.apiUrl)
        .then((response) => {
          store.cards = response.data.data;
          console.log(store.cards);
        });
    }
  }
</script>

<style lang="scss" scoped>

</style>