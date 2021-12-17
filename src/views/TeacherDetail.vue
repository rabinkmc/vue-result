
<template>
	<teacher-component :name="teacher.name" :image="teacher.image" :subject="teacher.subject"></teacher-component>
</template>

<script>
import TeacherComponent from '../components/TeacherComponent.vue'
import axios from 'axios'
export default {
	name: 'Teacher',
	props: ['id'],
	data() {
		return {
			teacher: {
				name: "name",
				subject: "subject",
				image: "http://localhost:8050/media/default.png"
			},
		}
	},
	components: {
		TeacherComponent
	},
	mounted() {
		let base_url = 'http://localhost:8050/'
		let id = this.id
		let url = base_url + 'teachers/' + id + '/'
		axios.get(url).then(response => {this.teacher = response.data})
	}
}
</script>
