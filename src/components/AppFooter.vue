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
            <li class="nav-item"><a href="" class="nav-link px-2">Home</a></li>
            <li class="nav-item"><a href="" class="nav-link px-2">Dashboard</a></li>
            <li class="nav-item"><a href="" class="nav-link px-2">Projects</a></li>
            <li class="nav-item"><a href="" class="nav-link px-2">Types</a></li>
            <li class="nav-item"><a href="" class="nav-link px-2">Technologies</a></li>

        </ul>

        <p class="text-center text-white">&copy; 2023 Company, Inc</p>
    </footer>
</template>

<style lang="scss" scoped>
.nav-link {
    color: white;
}
</style>