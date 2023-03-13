<script>
    import axios from 'axios';
    import { store } from '../../store.js';

    import AppLoader from '../../components/AppLoader.vue';

    export default {
        name: 'SingleProject',
        components: {
            AppLoader,
        },
        data() {
            return {
                store,
                project: null,
            }
        },
        mounted() {
            store.loading = true;
            axios.get(`${store.url_project}/api/projects/${this.$route.params.slug}`).then((response) => {
                if(response.data.success) {
                    store.loading = false;
                    this.project = response.data.result;
                    console.log(response);
                    this.$router.push('/proj/:slug');
                }
                else {
                    store.loading = false;
                    this.$router.push('/project_not_found');
                }
            })
        },
    }
</script>

<template>
    <main>
        <section class="loader" v-if="store.loading || project == null">
            <AppLoader />
        </section>
        <section class="section-project" v-else>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="mycard-project border rounded m-5">
                            <div class="myrow d-flex flex-column flex-md-row">
                                <div class="mycol-sm">
                                    <img class="w-100" :src="project.cover_path != null ? `${store.url_project}/storage/${project.cover_path}` : 'https://picsum.photos/id/1/200/300'" :alt="project.title">
                                </div>
                                <div class="mycol-lg text-center">
                                    <div>
                                        <div>
                                            <h4>{{ project.title }}</h4>
                                        </div>
                                        <div class="flex-grow-1 d-flex flex-column justify-content-between">
                                            <div>
                                                <p>
                                                    <em><strong>Tipologia:</strong> {{ project.type == null ? 'NON Disponibile' : project.type.name }}</em>
                                                </p>
                                                <p>
                                                    <em><strong>Tecnologie:</strong> <span class="text-primary">{{ (project.technologies == null) ? 'NON Disponibile' : ((project.technologies).map((technology) => technology.name)).join(', ') }}</span></em>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <p><strong>Contenuto:</strong> {{ (project.content == null) ? 'NON Disponibile' : project.content }}</p>
                                                </div>
                                                <div>
                                                    <router-link :to="{ name: 'projects' }" class="btn btn-secondary">Torna a Progetti</router-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
    .loader, .section-project {
        height: calc(100vh - 140px);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .section-project {

        .mycard-project{

            .mycol-sm {
                width: 20%;
            }

            .mycol-lg {
                width: 80%;
            }

            .mycol-sm, .mycol-lg {
                padding: 20px;
            }
        }
    }
</style>