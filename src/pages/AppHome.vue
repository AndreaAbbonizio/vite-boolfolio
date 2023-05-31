<script>
export default {
    name: 'AppHome',
}
</script>

<template>
    <div class="container py-5">
        <h1>Boolfolio</h1>

        <h2>Visualizza tutti i progetti </h2>

        <hr>
        <router-link class="btn btn-primary" :to="{ name: 'projects.index' }">Vai ai progetti</router-link>
    </div>
</template>

<style lang="scss" scoped>
.container {
    height: calc(100vh - 204px);
}
</style>