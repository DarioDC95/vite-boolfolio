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
            lastPage: Number,
        },
        emits: [
            'increaseBy',
            'decreaseBy',
            'selectPage'
        ],
        data() {
            return {
                current_page: 1,
            }
        },
        methods: {
            increaseByOne() {
                if(this.current_page < this.lastPage) {
                    this.current_page += 1;
                    this.$emit('increaseBy', this.current_page)
                }
            },
            decreaseByOne() {
                if(this.current_page > 1) {
                    this.current_page -= 1;
                    this.$emit('increaseBy', this.current_page)
                }
            },
            selectPage(value) {
                this.current_page = value;
                this.$emit('selectPage', this.current_page)
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
                    <div v-for="(project, index) in projects" :key="index" class="col-12 col-md-4 col-lg-3">
                        <AppCardProject :project="project" :urlProject="urlProject"/>
                    </div>
                </div>
                <div class="row my-5">
                    <div class="col">
                        <div class="mycard">
                            <div class="d-flex justify-content-center">
                                <button @click="increaseByOne()" class="btn btn-square btn-primary fs-6">&#8680;</button>
                                <ul class="list-unstyled d-flex mb-0">
                                    <li v-for="(page, index) in lastPage" :key="index">
                                        <button @click="selectPage((index + 1))" class="btn btn-square btn-light" :class="current_page == (index + 1) ? 'bg-dark-subtle' : ''">{{ page }}</button>
                                    </li>
                                </ul>
                                <button @click="decreaseByOne()" class="btn btn-square btn-primary fs-6">&#8678;</button>
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