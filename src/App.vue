<script>
import AppHeader from "./components/AppHeader.vue"
import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management


export default {
	components: {
		AppHeader
	},
	data() {
		return {
			store
		}
	},
	mounted() {
		this.doThings();

		// axios.get("indirizzo").then(risultato => {
		// 	console.log(risultato);
		// }).catch(errore => {
		// 	console.error(errore);
		// });
	},
	methods: {
		getEventList() {

			let url= this.store.apiUrl + this.store.apiEventEndPoint;

			axios.get(url).then(risultato =>{
				if(risultato.status === 200 && risultato.data.success){
					this.store.eventList = risultato.data.payload;
				}else{
					console.error("Ops... qualcosa è andato storto");

				}

			})
			
		}
	}
}
</script>

<template>

	
	<main>
		<AppHeader />

		<main>
			<router-view></router-view>
		</main>
		
	</main>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
main {
	padding: 1rem;
}
</style>

