<script>

import AppHeader from "./components/AppHeader.vue"
import axios from 'axios' //importo Axios
import { store } from "./store.js" //state management



export default {
	components: {
		AppHeader,

	},
	data() {
		return {
			store
		}
	},
	mounted() {
		this.getEventList();

		//this.doThings();

		// axios.get("indirizzo").then(risultato => {
		// 	console.log(risultato);
		// }).catch(errore => {
		// 	console.error(errore);
		// });
	},
	methods: {
		getEventList() {
			axios.get(this.store.apiUrl + this.store.apiEvent).then(risultato => {
				console.log(risultato.data);
				if (risultato.data.success) {
					this.store.events = risultato.data.payload;
				}
			}).catch(errore => {
				console.error(errore);
			});
		},
	}
}


</script>

<template>
	<main>
		<AppHeader />

		<ul>

		</ul>
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

