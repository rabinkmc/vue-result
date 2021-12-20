<template>
	<div class="mt-5 grid gap-4 grid-cols-1">
		<div v-for="student in students" :key="student.rollno">
			<router-link
				:to="{
					name: 'StudentDetail',
					params: {id: student.id}
				}
				"
			>{{student.name}}</router-link>
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
	computed: mapState(['students']),
	data() {
		return {
			url: 'http://localhost:8050/api/v1/students/?limit=37&offset=0',
		}
	},
	mounted() {
		let token = this.$store.state.accessToken
		axios.get(this.url, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then(response => {
			this.$store.state.students = response.data.results
		})
	}
}
</script>

