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
export default {
	props: {
		students: {
			type: Array,
			requird: true
		},
	}
}
</script>
