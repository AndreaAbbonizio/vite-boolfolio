<script>
import axios from 'axios';
export default {
    name: 'ProjectShow',
    data() {
        return {
            project: {},

            isLoading: true,
            projectFound: false,
            projectSlug: '',
            baseUrl: 'http://127.0.0.1:8000/',
        }
    },
    mounted() {
        console.log(this.$route.params.slug);
        this.projectSlug = this.$route.params.slug;

        this.getProject();

    },

    computed: {
        projectImage() {
            return this.baseUrl + 'storage/' + this.project.link_image;
        }
    },

    methods: {
        getProject() {

            console.log('http://127.0.0.1:8000/api/projects/' + this.projectSlug);
            axios.get(this.baseUrl + 'api/projects/' + this.projectSlug).then(response => {
                console.log('project:', response);
                this.isLoading = false;
                if (response.data.success) {
                    this.project = response.data.project;
                    this.projectFound = true;
                } else {
                    this.projectFound = false;
                }
            });
        }
    }
}
</script>


<template>
    <div v-if="isLoading" id="spinner-container">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div v-else class="container py-5">
        <div v-if="projectFound">
            <div class="project-image text-center">
                <img :src="projectImage" alt="">
            </div>

            <h1>{{ project.title }}</h1>

            <div class="technologies">
                <span v-for="technology in project.technologies" class="badge rounded-pill"
                    :style="{ backgroundColor: technology.color }">{{ technology.name }}</span>
            </div>
            <h4>
                {{ project.type ? project.type.name : 'Nessuna tipologia' }}
            </h4>
            <hr>
            <p>
                {{ project.description }}
            </p>

        </div>
        <div v-else>
            <div class="alert alert-danger" role="alert">
                Nessun progetto trovato
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.container {
    height: calc(100vh - 204px);
    width: 100%;
    overflow-y: auto;

    .project-image img {
        max-height: 400px;
        object-fit: cover;
    }

    .technologies {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        gap: .5em;
        padding: .8em 0;
    }
}

#spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 600px;
}
</style>