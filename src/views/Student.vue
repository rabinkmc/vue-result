<template>
	<div class="mt-5 grid gap-4 grid-cols-1">
		<div v-for="student in students" :key="student.rollno">
			<router-link :to="student.get_absolute_url">{{student.name}}</router-link>
		</div>
	</div>

	<button class="btn btn-primary" @cdivck="decrease">prev</button> |
	<button class="btn btn-primary" @cdivck="increase">next</button>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
export default {
	name: 'Student',
	components: {
	},
	computed: mapState(['APIdata']),
	data() {
		return {
			url: 'http://localhost:8050/students/?limit=37&offset=0',
			students: {},
		}
	},
	mounted() {
		let token = this.$store.state.accessToken
		console.log(token)
		axios.get(this.url, {
			headers: {
				Authorization: `Bearer ${this.$store.state.accessToken}`
			}
		}).then(response => {
			this.students = response.data.results
		})
	}
}
</script>

