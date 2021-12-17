<template>
	<div class="mt-5 grid gap-4 grid-cols-1">
		<div v-for="teacher in teachers" :key="teacher.id">
			<router-link :to="teacher.get_absolute_url">{{teacher.name}}</router-link>
		</div>
	</div>
	<button class="btn btn-primary" @click="decrease">prev</button> |
	<button class="btn btn-primary" @click="increase">next</button>
</template>

<script>
import axios from 'axios'

export default {
	name: 'Teacher',
	components: {
	},
	data() {
		return {
			url: 'http://localhost:8050/teachers/',
			teachers: null,
		}
	},
	mounted() {
		axios.get(this.url).then(response => {
			this.teachers = response.data.results
		})
	}
}
</script>

