<script>
  // libraries and store
  import axios from 'axios'
  import { store } from './store.js'

  // components
  import AppHeader from './components/AppHeader.vue'
  import AppFooter from './components/AppFooter.vue'

  export default {
    components: {
      AppHeader,
      AppFooter,
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
          if(response.data.success) {
            store.projects = response.data.result.data;
            store.loading = false;
            store.last_page = response.data.result.last_page;
            this.$router.push('/');
          }
          else {
            console.log(this.$router);
            this.$router.push('/page_not_found');
          }
        })
      },
      changePage() {
        this.getProjects();
      }
    }
  }
</script>

<template>
  <AppHeader v-if="store.loading == false"/>
  <router-view @increase-by="changePage" @decrease-by="changePage" @selectPage="changePage"></router-view>
  <AppFooter v-if="store.loading == false"/>
</template>

<style lang="scss">
  @use './styles/general.scss' as *;

</style>
