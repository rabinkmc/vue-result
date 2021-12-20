<template>
	<div class="mt-5 grid gap-4 grid-cols-1">
		<div v-for="teacher in teachers" :key="teacher.id">
			<router-link
				:to="{
					name: 'TeacherDetail',
					params: {id: teacher.id}
				}"
			>{{teacher.name}}</router-link>
		</div>
	</div>
	<button class="btn btn-primary" @click="decrease">prev</button> |
	<button class="btn btn-primary" @click="increase">next</button>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
	name: 'Teachers',
	data() {
		return {
			count: 0
		}
	},
	computed: mapGetters(["teachers"]),

	methods: {
		...mapActions(['fetchTeachers']),
	},

	mounted() {
		this.fetchTeachers()
	}
}
</script>

