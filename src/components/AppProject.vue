<script>
    import { stringifyExpression } from '@vue/compiler-core';
import AppCardProject from './AppCardProject.vue';

    export default {
        components: {
            AppCardProject,
        },
        props: {
            projects: Array,
            urlProject: String,
        }
    }
</script>

<template>
    <main>
        <section>
            <div class="container">
                <div class="row my-5">
                    <div class="col">
                        <div class="mycard text-center">
                            <h1>Lista dei Progetti</h1>
                        </div>
                    </div>
                </div>
                <div class="row gy-5">
                    <div v-for="(project, index) in projects" :key="index" class="col-12 col-md-4 col-lg-3">
                        <AppCardProject :project="project" :urlProject="urlProject"/>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
    @use '../styles/partials/variables' as *;
    
</style>