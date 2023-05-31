<script>

import axios from 'axios';


import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'ProjectsIndex',

    data() {
        return {

            projects: [],
            currentPage: 1,
            types: [],
            selectedTypeId: '',
            projectsFound: false,
            isLoading: true,
            apiUrl: 'http://127.0.0.1:8000/api/projects',
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
                this.projects = response.data.results.data;
                this.types = response.data.allTypes;
                this.pagination = response.data.results;
            });

        },

        getProjectsForm() {
            axios.get('http://127.0.0.1:8000/api/projects?page=' + this.currentPage + '&type_id=' + this.selectedTypeId).then(response => {

                console.log(response);
                this.isLoading = false;
                if (response.data.success) {

                    this.projects = response.data.results;
                    console.log(this.projects);
                    this.types = response.data.allTypes;
                    this.projectsFound = true;
                } else {
                    this.projectsFound = false;
                }
            });
        }
    }
}
</script>

<template>
    <main>
        <h1>Tutti i progetti</h1>

        <hr>

        <form @submit.prevent="" action="" class="d-flex">

            <select name="type_id" id="type_id" class="form-select" v-model="selectedTypeId" @change="getProjectsForm()">

                <option value="">Tutte</option>

                <option v-for="singleType in types" :value="singleType.id">{{ singleType.name }}</option>

            </select>


        </form>

        <div v-if="projects.length > 0" class="container pt-5">

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
main {
    height: calc(100vh - 204px);
    width: 100%;
    overflow-y: auto;
}

.loading-screen {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    min-height: 600px;


}
</style>