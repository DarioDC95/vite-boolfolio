<script>
  // libraries
  import axios from 'axios'

  // components
  import AppProject from './components/AppProject.vue'

  export default {
    components: {
      AppProject
    },
    data() {
      return {
        url_project: 'http://127.0.0.1:8000',
        projects: null,
        current_page: 1,
        last_page: null,
      }
    },
    beforeMount() {
      this.getProjects()
    },
    methods: {
      getProjects() {
        axios.get(`${this.url_project}/api/projects?page=${this.current_page}`).then((response) => {
          this.projects = response.data.result.data
          this.last_page = response.data.result.last_page
          console.log(this.projects);
          console.log(this.last_page)
        })
      },
      changePage(value) {
        this.current_page = value;

        this.getProjects();
      }
    }
  }
</script>

<template>
  <AppProject :projects="projects" :urlProject="url_project" :lastPage="last_page" @increaseBy="changePage" @decreaseBy="changePage" @selectPage="changePage"/>
</template>

<style lang="scss">
  @use './styles/general.scss' as *;

</style>
