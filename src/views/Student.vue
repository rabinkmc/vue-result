<template>
	<div class="m-10 flex">
		<input class="border border-indigo-800 px-5 flex-initial" type="number" v-model="offset" />
	</div>
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
<<<<<<< HEAD
</template>

<script>
=======
	<div class="my-5 flex">
		<button
			class="mx-5 flex-initial bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			@click="prevPage"
		>prev</button>
		<button
			class="mx-5 flex-initial bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			@click="nextPage"
		>next</button>
	</div>
</template>

<script>

>>>>>>> devel
import {mapGetters, mapActions} from 'vuex'

export default {
	name: 'Students',
<<<<<<< HEAD
	computed: {
		...mapGetters(['students']),
	},
	methods: {
		...mapActions(['fetchStudents']),
	},
	mounted() {
		this.fetchStudents()
=======
	data() {
		return {
			offset: 0,
		}
	},
	components: {
	},
	computed: {
		...mapGetters({
			students: 'storeStudents',
			storeOffset: 'storeOffset'
		}),
	},
	methods: {
		...mapActions(['fetchStudents']),
		nextPage() {
			this.fetchStudents(this.storeOffset + 5)
		},
		prevPage() {
			if (this.storeOffset > 37)
				this.fetchStudents(this.storeOffset - 5)
		}
	},
	mounted() {
		this.fetchStudents(this.offset)
	},
	watch: {
		offset(val) {
			if (val) {
				this.fetchStudents(this.offset)
			}
		}
>>>>>>> devel
	}
}

</script>

