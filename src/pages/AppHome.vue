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
        <router-link :to="{ name: 'about-us' }">Vai alla pagina di about</router-link>
    </div>
</template>

<style lang="scss" scoped>
.container {
    height: calc(100vh - 204px);
}
</style>