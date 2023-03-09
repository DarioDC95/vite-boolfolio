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
      }
    },
    beforeMount() {
      this.getProjects()
    },
    methods: {
      getProjects() {
        axios.get(`${this.url_project}/api/projects`).then((response) => {
          this.projects = response.data.result
          console.log(this.projects);
          console.log(response)
        })
      }
    }
  }
</script>

<template>
  <AppProject :projects="projects" :urlProject="url_project"/>
</template>

<style lang="scss">
  @use './styles/general.scss' as *;

</style>
