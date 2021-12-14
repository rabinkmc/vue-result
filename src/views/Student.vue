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

export default {
	name: 'Student',
	components: {
	},
	data() {
		return {
			url: 'http://localhost:8050/api/v1/student/?limit=37&offset=0',
			students: null,
		}
	},
	mounted() {
		axios.get(this.url).then(response => {
			this.students = response.data.results
		})
	}
}
</script>

