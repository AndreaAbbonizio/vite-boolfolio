<script>

export default {
    name: 'AppAbout'
}

</script>



<template>
    <div class="container py-5">
        <h1>Boolfolio</h1>

        <h2>Chi sono?</h2>

        <hr>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, labore sed autem expedita minus id corrupti
            debitis rem facilis, saepe odio quidem ullam provident pariatur necessitatibus et eligendi, atque quis?</p>
        <router-link :to="{ name: 'home' }" class="btn btn-primary">Torna alla home</router-link>
    </div>
</template>

<style lang="scss" scoped>
.container {
    height: calc(100vh - 204px);
}
</style>