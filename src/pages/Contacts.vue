<script>
    import { store } from '../store.js';
 
    export default {
        data() {
            return {
                store,
                name: null,
                surname: null,
                email: null,
                phone_number: null,
                message: null,
            }
        },
        methods: {
            sendForm() {
                const data = {
                    name: this.name,
                    surname: this.surname,
                    email: this.email,
                    phone_number: this.phone_number,
                    message: this.message,
                }

                axios.post(`${store.baseUrl}/api/contacts`, data).then((response) => {

                });
            }
        },
    }
</script>

<template>
    <main>
        <section class="my-5">
            <div class="container">
                <div class="row mb-5">
                    <div class="col">
                        <h1 class="text-center mb-5">Contattaci</h1>
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="d-flex flex-column text-center">
                                    <div class="mb-3">
                                        <strong><i class="fas fa-map me-2"></i>Indirizzo:</strong> Via UnaViaQualsiasi, Num, Città CAP (Sigla provincia)
                                    </div>
                                    <div>
                                        <strong><i class="fas fa-book me-2"></i>Partita Iva:</strong> 1234567890
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="d-flex flex-column text-center">
                                    <div class="mb-3">
                                        <strong><i class="fas fa-phone me-2"></i>Telefono:</strong> +54 1234567890
                                    </div>
                                    <div>
                                        <strong><i class="fas fa-envelope me-2"></i>Email:</strong> info@boolpress.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
        <section class="bg-info bg-gradient py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="text-center mb-5 text-white">Scrivici</h2>
                        <form @submit.prevent="">
                            <div class="row">
                                <div class="col-12 col-md-6 mb-3">
                                    <label class="control-label" for="name">Nome</label>
                                    <input type="text" class="form-control" name="name" id="name" placeholder="Inserisci il tuo nome" v-model="name">
                                </div>
                                <div class="col-12 col-md-6 mb-3">
                                    <label class="control-label" for="surname">Cognome</label>
                                    <input type="text" class="form-control" name="surname" id="surname" placeholder="Inserisci il tuo cognome" v-model="surname">
                                </div>
                                <div class="col-12 col-md-6 mb-3">
                                    <label class="control-label" for="email">Email</label>
                                    <input type="mail" class="form-control" name="email" id="email" placeholder="Inserisci la tua email" v-model="email">
                                </div>
                                <div class="col-12 col-md-6 mb-3">
                                    <label class="control-label" for="phone_number">Nome</label>
                                    <input type="phone" class="form-control" name="phone_number" id="phone_number" placeholder="Inserisci il tuo numero di telefono" v-model="phone_number">
                                </div>
                                <div class="col-12 mb-5">
                                    <label class="control-label" for="phone_number">Messaggio</label>
                                    <textarea class="form-control" name="message" id="message" rows="5" v-model="message"></textarea>
                                </div>
                                <div class="col-12 my-2 text-center">
                                    <button type="submit" class="btn btn-success">Invia i dati</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
    
</style>