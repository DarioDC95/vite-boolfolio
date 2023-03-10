<script>
    // store
    import { store } from '../store.js'

    // components
    import AppCardProject from './AppCardProject.vue';

    export default {
        components: {
            AppCardProject,
        },
        emits: [
            'increase-by',
            'decrease-by',
            'select-page'
        ],
        data() {
            return {
                store,
            }
        },
        methods: {
            increaseByOne() {
                if(store.current_page < store.last_page) {
                    store.current_page += 1;
                    this.$emit('increase-by')
                }
            },
            decreaseByOne() {
                if(store.current_page > 1) {
                    store.current_page -= 1;
                    this.$emit('increase-by')
                }
            },
            selectPage(value) {
                store.current_page = value;
                this.$emit('select-page')
            }
        },
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
                    <div v-for="(project, index) in store.projects" :key="index" class="col-12 col-md-4 col-lg-3">
                        <AppCardProject :project="project" :urlProject="store.url_project"/>
                    </div>
                </div>
                <div class="row my-5">
                    <div class="col">
                        <div class="mycard">
                            <div class="d-flex justify-content-center">
                                <button @click="increaseByOne()" class="btn btn-square btn-primary fs-6" :class="store.current_page == store.last_page ? 'disabled' : ''">&#8680;</button>
                                <ul class="list-unstyled d-flex mb-0">
                                    <li v-for="(value, index) in store.last_page" :key="index">
                                        <button @click="selectPage((value))" class="btn btn-square btn-light" :class="store.current_page == value ? 'bg-dark-subtle' : ''">{{ value }}</button>
                                    </li>
                                </ul>
                                <button @click="decreaseByOne()" class="btn btn-square btn-primary fs-6" :class="store.current_page == 1 ? 'disabled' : ''">&#8678;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
    @use '../styles/partials/variables' as *;
    
</style>