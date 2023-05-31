<script>
export default {
    name: 'AppAside',
    data() {
        return {

        }
    },
}
</script>


<template>
    <aside class="bg-dark">
        <div class="card card-aside">
            <div class="card-header link">
                Dashboard
            </div>
            <div class="list-group list-group-flush">
                <router-link class="list-group-item list-group-item-action" :to="{ name: 'home' }">Home</router-link>
            </div>
        </div>

        <div class="card card-aside">
            <div class="card-header link">
                Progetti
            </div>
            <div class="list-group list-group-flush">
                <router-link class="list-group-item list-group-item-action" :to="{ name: 'projects.index' }">Tutti i
                    progetti</router-link>
            </div>
        </div>

    </aside>
</template>

<style lang="scss" scoped>
$secondary: #ff5500c0;

aside {
    display: flex;
    flex-flow: column;
    gap: 2em;

    height: calc(100vh - 204px);


    min-width: 200px;

    padding: 16px;


    border-top: 1px solid rgba(255, 255, 255, 0.347);
    border-bottom: 1px solid rgba(255, 255, 255, 0.347);

    .card-aside {
        border: 1px solid $secondary;

        .link {
            border-color: $secondary;
            color: white;
        }
    }


}

.router-link-active {
    background-color: $secondary;
    color: white;
}
</style>