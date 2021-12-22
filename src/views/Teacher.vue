<template>
	<div class="mt-5 grid gap-4 grid-cols-1">
		<div class="ml-2 pl-12 text-left" v-for="teacher in teachers" :key="teacher.id">
			<router-link
				:to="{
					name: 'TeacherDetail',
					params: {id: teacher.id}
				}"
			>{{teacher.name}}</router-link>
		</div>
	</div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
	name: 'Teachers',
	computed: mapGetters(["teachers"]),

	methods: {
		...mapActions(['fetchTeachers']),
	},

	mounted() {
		this.fetchTeachers()
	}
}
</script>

