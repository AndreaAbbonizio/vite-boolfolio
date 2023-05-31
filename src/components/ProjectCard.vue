<script>
export default {
    name: 'ProjectCard',

    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000/',
        }
    },

    props: {
        project: Object,
    },



    computed: {
        shortContent() {
            if (this.project.description.length > 50) {
                return this.project.description.substring(0, 50) + '...';
            } else {
                return this.project.description;
            }
        },

        linkImage() {
            if (this.project.link_image == null) {
                return "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
            } else {
                return this.baseUrl + 'storage/' + this.project.link_image;
            }
        }
    },
}
</script>

<template>
    <div class="card project">

        <img :src="linkImage" class="link-image card-img-top" alt="...">

        <div class="card-body">

            <h5 class="card-title">{{ project.title }}</h5>

            <small class="text-secondary">({{ project.type ? project.type.name : 'tipo non specificato' }})</small>


            <div class="technologies d-flex flex-wrap gap-2 my-3">
                <span v-for="technology in project.technologies" :style="{ 'background-color': technology.color }"
                    class="badge rounded-pill text-white">{{
                        technology.name }}</span>
            </div>




            <p class="card-text"> {{ shortContent }} </p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->

        </div>


        <div class=" py-3 ms-2">

            <router-link class="btn btn-primary"
                :to="{ name: 'projects.show', params: { slug: project.slug } }">Mostra</router-link>
        </div>



    </div>
</template>

<style lang="scss" scoped>
.project.card {
    height: 480px;

    .link-image {
        height: 200px;

        object-fit: cover;
        object-position: center;
    }

}
</style>