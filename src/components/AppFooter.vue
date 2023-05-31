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
    <footer class="py-3">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
                <router-link class="nav-link text-white" :to="{ name: 'home' }">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-white" :to="{ name: 'projects.index' }">Tutti i progetti</router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link text-white" :to="{ name: 'about' }">About</router-link>
            </li>


        </ul>

        <p class="text-center text-white">&copy; 2023 Company, Inc</p>
    </footer>
</template>

<style lang="scss" scoped>
.router-link-active {
    background-color: #b22222c9;
    color: white;
    font-weight: bold;

}
</style>