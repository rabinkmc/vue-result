<template>
	<!-- This example requires Tailwind CSS v2.0+ -->
	<nav-bar></nav-bar>
	<ul class="list-disc">
		<li v-for="student in students" :key="student.rollno">{{student.name}}-{{student.rollno}}</li>
	</ul>

	<footer-school></footer-school>
</template>

<script>
let url = 'http://localhost:8050/api/v1/student/'
import axios from 'axios'
import NavBar from './components/NavbarSchool.vue'
import FooterSchool from './components/FooterSchool.vue'

export default {
	name: 'App',
	components: {
		NavBar,
		FooterSchool,
	},
	data() {
		return {
			info: null,
			prev: null,
			next: null,
			count: null,
			students: null,
		}
	},
	mounted() {
		axios.get(url).then(response => {
			let data = response.data
			this.count = data.count
			this.prev = data.prev
			this.next = data.next
			this.students = data.results
		})
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 0px;
}
</style>
