<script>
export default {
    props: {
        project: Object,
        urlProject: String
    }
}
</script>

<template>
    <div class="card">
        <img :src="project.cover_path == null ? 'https://picsum.photos/id/1/200/300' : `${urlProject}/storage/${project.cover_path}`" :alt="project.title" class="img-top">
        <div class="card-body">
            <div>
                <h4>{{ project.title }}</h4>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    
</style>