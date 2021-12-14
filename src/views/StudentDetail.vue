<template>
	<student-component :name="student.name" :image="student.image" :rollno="student.rollno"></student-component>
	<button class="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
		<router-link :to="{
		name:"Result", params:{id:9} }>result</router-link>
	</button>
</template>

<script>
import StudentComponent from '../components/StudentComponent.vue'
import axios from 'axios'
export default {
	name: 'Student',
	data() {
		return {
			student: {},
		}
	},
	components: {
		StudentComponent
	},
	mounted() {
		let base_url = 'http://localhost:8050/api/v1'
		let url = this.$route["fullPath"]
		axios.get(base_url + url).then(response => {this.student = response.data})
	}
}
</script>
