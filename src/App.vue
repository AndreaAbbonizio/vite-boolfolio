<script>



import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppAside from './components/AppAside.vue';


export default {
  name: "App",
  data() {

    return {

    };
  },
  components: {
    AppHeader,
    AppFooter,
    AppAside
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <div class="d-flex">
    <AppAside></AppAside>

    <router-view></router-view>

  </div>
  <AppFooter></AppFooter>
</template>

<style scoped></style>
