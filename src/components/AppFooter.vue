<script>
export default {
    name: 'AppFooter',

    data() {
        return {

        }
    }
}
</script>

<template>
    <footer class="py-3 bg-dark">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3 text-primary">
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'projects.index' }">Tutti i progetti</router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'about-us' }">About</router-link>
            </li>


        </ul>

        <p class="text-center text-white">&copy; 2023 Company, Inc</p>
    </footer>
</template>

<style lang="scss" scoped>
.nav-link {
    color: white;
}
</style>