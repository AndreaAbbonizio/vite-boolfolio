<script>
export default {
    name: 'AppHeader',

    data() {
        return {

        }
    }
}
</script>

<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-dark text-white">
            <div class="container-fluid">
                <router-link class="navbar-brand" :to="{ name: 'home' }">Boolfolio</router-link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" :class="$route.name == 'home' ? 'active' : ''"
                                :to="{ name: 'home' }">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :class="$route.name == 'projects.index' ? 'active' : ''"
                                :to="{ name: 'projects.index' }">Tutti i progetti</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :class="$route.name == 'about' ? 'active' : ''"
                                :to="{ name: 'about' }">About</router-link>
                        </li>


                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.container-fluid {
    .navbar-brand {
        color: white;
    }


    .nav-link {
        color: white;
    }

    .active {
        background-color: #b22222c9;
        color: aliceblue;
        font-weight: bold;

    }


}
</style>