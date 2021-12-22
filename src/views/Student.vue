<template>
	<div class="mt-5 grid gap-4 grid-cols-1">
		<div class="ml-4 pl-12 text-left" v-for="student in students" :key="student.rollno">
			<router-link
				:to="{
					name: 'StudentDetail',
					params: {id: student.id}
				}
				"
			>{{student.name}}</router-link>
		</div>
	</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
	name: 'Students',
	computed: {
		...mapGetters(['students']),
	},
	methods: {
		...mapActions(['fetchStudents']),
	},
	mounted() {
		this.fetchStudents()
	}
}

</script>

