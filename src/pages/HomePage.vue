<script>
import { store } from "../store" //state management

export default {
    name: "HomePage",
    components: {


    },

    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div v-for="evento in  store.events " class="col-4">
                <div class="card mb-3">
                    <img :src="evento.img" class="card-img-top " alt="...">
                    <div class="card-body">
                        <h5 class="card-title"><strong> {{ evento.name }} </strong></h5>
                        <p class="card-text">{{ evento.description }}</p>
                        <p class="card-text"><strong>Data evento</strong> {{ evento.date }}</p>
                        <div class="card-footer text-center">

                            <router-link :to="{ name: 'event-detail', params: { id: evento.id } }" class="btn btn-primary">
                                <font-awesome-icon icon="fa-solid fa-circle-info" class="me-2" />
                                <span>Dettagli</span>
                            </router-link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>