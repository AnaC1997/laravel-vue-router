<script>
import axios from "axios";
import { store } from "../store" //state management

export default {
    name: "CategoryService",
    components: {


    },

    data() {
        return {
            store,
            tags: null
        }
    },
    mounted() {
        this.getTags();

    },
    methods: {
        getTags() {
            let url = this.store.apiUrl + this.store.apiTag;
            axios.get(url).then(risultato => {
                console.log("url", url);
                if (risultato.data.success == true) {
                    this.store.tags = risultato.data.payload;
                    console.log("Risultato: ", risultato.data.payload);
                }
            });

        }


    }
}
</script>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-4"  v-for="tag in store.tags">
                <div class="card mb-3" style="width: 23rem; height: 23rem;">
                <img :src="tag.img " class="card-img-top"  alt="..." style=" height: 15rem;" >
                <div class="card-body">
                    <h5 class="card-title">{{ tag.name }}</h5>
                    <a href="#" class="btn btn-primary">Vizualiza gli eventi</a>
                </div>
            </div>

            </div>
           

        </div>
    </div>
</template>