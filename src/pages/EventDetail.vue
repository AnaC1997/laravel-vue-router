<script>
import { store } from "../store.js" //state management
import axios from 'axios'; //importo Axios

export default {
    name: "EventDetail",
    props: ["id"],
    data() {
        return {
            store,
            evento: null
        }
    },
    mounted() {
        this.getEventId();
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
        getEventId() {

            let url = this.store.apiUrl + this.store.apiEvent + this.id;
            axios.get(url).then(risultato => {
                console.log("url: " + url);
                console.log("Risultato: " + risultato.data.payload);
                if (risultato.data.success === true) {
                    this.evento = risultato.data.payload;
                    
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
            <div class="col-md-12 gy-4">
                <div v-if="!evento">Caricamento dati in corso</div>
                <div class="card h-100">
                    <div class="card-header text-center">{{ evento?.date }}</div>
                    <div class="card-body">
                        <h5 class="card-title">{{ evento?.name }}</h5> <br>
                        <h6 class="card-subtitle mb-2 text-muted">
                          <strong>Incaricato dell'evento: </strong>{{ evento?.user ? evento?.user.name : "Utente sconosciuto" }} 
                        </h6>
                        <p class="card-text">Restano <b>{{ evento?.available_tickets }}</b> biglietti disponibili.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>