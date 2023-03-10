<script>
  // libraries and store
  import axios from 'axios'
  import { store } from './store.js'

  // components
  import AppHeader from './components/AppHeader.vue'
  import AppFooter from './components/AppFooter.vue'
  import AppProject from './components/AppProject.vue'

  export default {
    components: {
      AppHeader,
      AppFooter,
      AppProject,
    },
    data() {
      return {
        store,
      }
    },
    beforeMount() {
      this.getProjects()
    },
    methods: {
      getProjects() {
        axios.get(`${store.url_project}/api/projects?page=${store.current_page}`).then((response) => {
          store.projects = response.data.result.data;
          store.loading = false;
          store.last_page = response.data.result.last_page;
          console.log(store.projects);
          console.log(store.last_page);
        })
      },
      changePage() {
        this.getProjects();
      }
    }
  }
</script>

<template>
  <AppHeader />
  <!-- <AppProject @increase-by="changePage" @decrease-by="changePage" @selectPage="changePage"/> -->
  <router-view></router-view>
  <AppFooter />
</template>

<style lang="scss">
  @use './styles/general.scss' as *;

</style>
