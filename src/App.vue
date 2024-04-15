<template>
  <LoaderComponent/>
  <HeaderComponent/>
  <SearchBarComponent />
  <CardListComponent/>
  <CardComponent/>
</template>

<script>
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
    }
  }
</script>

<style lang="scss" scoped>

</style>