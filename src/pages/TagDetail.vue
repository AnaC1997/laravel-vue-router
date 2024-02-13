<script>
import { store } from "../store.js" //state management
import axios from 'axios'; //importo Axios

export default {
    name: "TagDetail",
    props: ["id"],
    data() {
        return {
            store,
            event: null,


        }
    },
    mounted() {
        this.getTagId();
        ///////// SOLUZIONE SENZA FARE LA CHIAMATA AXIOS//////////
        // console.log("Eventi: ", this.store.eventList);
        // console.log("Evento dettaglio: ", this.store.eventList[this.id - 1]);
        // for (const item of this.store.eventList) {
        //     if (item.id == this.id) {
        //         this.evento = item;
        //     }
        // }
        // this.evento = this.store.eventList.find(item => item.id == this.id);

    },
    methods: {
        getTagId() {

            let url = this.store.apiUrl + this.store.apiTag + this.id;
            axios.get(url).then(risultato => {
                console.log("url: " + url);
                console.log("Risultato tagDetail", risultato.data.payload);
                if (risultato.data.success === true) {
                    this.event = risultato.data.payload;
                }

            }).catch(errore => {
                console.error(errore);
            });
        },
    }

}

</script>

<template>
    <div class="container">
        <div class="row">
                <h1 class="text-center" >Tipo di evento: {{ event?.name }}</h1>
            <span v-for="evento in event?.events" class="col-4">
                <div class="card mb-3">
                    <div class="card-body">
                        
                        <h5 class="card-title"><strong>{{evento?.name}} </strong></h5>
                        <p class="card-text">{{ evento?.description }}</p>
                        <p class="card-text"><strong>Data evento</strong> {{ evento?.date }}</p>
                        <div class="card-footer text-center">
                            <router-link :to="{ name: 'event-detail', params: { id: evento.id } }" class="btn btn-primary">
                                <font-awesome-icon icon="fa-solid fa-circle-info" class="me-2" />
                                <span>Dettagli</span>
                            </router-link>

                        </div>
                    </div>
                </div>
            </span>

        </div>






    </div>
</template>

<style scoped></style>