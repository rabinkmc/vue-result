<template>
	<div class="result">Result</div>
	{{result}}
</template>

<script>
import axios from 'axios'
export default {
	name: 'Result',

	data() {
		return {
			result: null,
		}
	},

	components: {
	},

	mounted() {
		let base_url = 'http://localhost:8050/api/v1/'
		let id = this.$router.params.id
		let url = base_url + 'result/' + id + '/'
		axios.get(url).then(response => {this.result = response.data})
	}
}
</script>
