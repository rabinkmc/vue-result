
<template>
	<teacher-component :name="teacher.name" :image="teacher.image" :subject="teacher.subject"></teacher-component>
</template>

<script>
import TeacherComponent from '../components/TeacherComponent.vue'
import axios from 'axios'
export default {
	name: 'Teacher',
	data() {
		return {
			teacher: {},
		}
	},
	components: {
		TeacherComponent
	},
	mounted() {
		let base_url = 'http://localhost:8050/api/v1'
		let url = this.$route["fullPath"]
		axios.get(base_url + url).then(response => {this.teacher = response.data})
	}
}
</script>
