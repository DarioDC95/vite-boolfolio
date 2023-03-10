<script>
export default {
    name: 'HomePage',
}
</script>

<template>
    <main>
        <section class="home-page">
            <div class="container h-100">
                <div class="row h-100">
                    <div class="col h-100">
                        <div class="mycard h-100 py-5">
                            <div class="welcome d-flex justify-content-center align-items-center h-100">
                                <h1 class="text-white">WELCOME!!</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
    .home-page {
        height: calc(100vh - 140px);
        .welcome {
            background-color: rgb(20, 20, 35);
            border-radius: 30px;
        }
    }
</style>