<script>
    export default {
        name: 'AppHeader',
        data() {
            return {
                data_navbar: [
                    {
                        label: 'Homepage',
                        routeName: 'homepage'
                    },
                    {
                        label: 'Progetti',
                        routeName: 'projects'
                    },
                    {
                        label: 'Contattaci',
                        routeName: 'contacts'
                    }
                ]
            }
        }
    }
</script>

<template>
    <header class="bg-body-tertiary">
        <div class="container">
            <div class="row">
                <div class="col">
                    <nav class="navbar navbar-expand-md">
                        <div class="container-fluid">
                            <div class="navbar-brand">
                                <img src="../../img/logo.svg" alt="Logo Boolean">
                            </div>
                            <div class="d-flex">
                                <ul class="navbar-nav">
                                    <li v-for="(value, index) in data_navbar" :key="index" class="nav-item">
                                        <router-link class="nav-link" :to="{ name: value.routeName }">{{ value.label }}</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
    header {
        height: 70px;
        display: flex;
        align-items: center;
    }
</style>