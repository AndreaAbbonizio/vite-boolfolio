<script>

import axios from 'axios';


import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'ProjectsIndex',

    data() {
        return {

            apiUrl: 'http://127.0.0.1:8000/api/projects',

            projects: [],


            pagination: {},
        }
    },

    components: {
        ProjectCard,
    },

    created() {
        this.getProjects(this.apiUrl);
    },

    methods: {
        getProjects(apiUrl) {

            axios.get(apiUrl).then(response => {
                console.log(response.data.results);
                this.projects = response.data.results.data;

                this.pagination = response.data.results;
            });

        },

    },
}
</script>

<template>
    <main>

        <div v-if="projects.length > 0" class="container pt-5">
            <h1>Tutti i progetti</h1>

            <hr>

            <div class="row">
                <div v-for="project in projects" class="col-4 mb-5">

                    <ProjectCard :project="project"></ProjectCard>

                </div>
            </div>

            <hr>

            <div class="page-controller d-flex justify-content-center gap-2 py-4">
                <button v-for="link in pagination.links" class="btn"
                    :class="link.active ? 'btn-primary' : 'btn-outline-secondary'" v-html="link.label"
                    :disabled="link.url == null ? true : false" @click="getProjects(link.url)">

                </button>
            </div>
        </div>

        <div v-else class="loading-screen">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

    </main>
</template>
  

  


<style lang="scss">
.loading-screen {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    min-height: 600px;


}
</style>