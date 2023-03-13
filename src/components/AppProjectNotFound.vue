<script>
    export default {
        name: 'AppProjectNotFound'
    }
</script>

<template>
    <main>
        <section class="not-found">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="mycard text-center">
                            <h2>Pagina non trovata</h2>
                            <p>Mi spiace ma non è stato possibile trovare la pagina.</p>
                            <router-link :to="{ name: 'projects' }" class="btn btn-secondary">Torna ai progetti</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
    .not-found {
        height: calc(100vh - 140px);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>