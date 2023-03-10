<script>
    export default {
        name: 'AppCardProject',
        props: {
            project: Object,
            urlProject: String
        }
    }
</script>

<template>
    <div class="card h-100">
        <img :src="project.cover_path == null ? 'https://picsum.photos/id/1/200/300' : `${urlProject}/storage/${project.cover_path}`" :alt="project.title" class="card-img-top">
        <div class="card-body d-flex flex-column">
            <div>
                <h5>{{ project.title }}</h5>
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
                        <p><strong>Contenuto:</strong> {{ (project.content == null) ? 'NON Disponibile' : `${(project.content).substring(0, 50)}${'...'}` }}</p>
                    </div>
                    <div>
                        <router-link :to="{ name: 'single-project', params: { slug: project.slug } }" class="btn btn-secondary">Vai al Progetto</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    
</style>