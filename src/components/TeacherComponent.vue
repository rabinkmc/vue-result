<template>
	<div class="mt-40 bg-gray-200 font-sans mt-20 w-full flex flex-row justify-center items-center">
		<div class="card w-96 mx-auto bg-white shadow-xl hover:shadow">
			<img class="w-32 mx-auto rounded-full -mt-20 border-8 border-white" :src="image" alt />
			<div class="text-center mt-2 text-3xl font-medium">{{name}}</div>
			<div class="text-center mt-2 font-light text-sm">{{subject}}</div>
			<div class="text-center font-normal text-lg">Kathmandu</div>
			<hr class="mt-4" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'TeacherComponent',
	data() {
		return {

		}
	},

	props: {
		name: {type: String, required: true},
		image: {
			type: String,
			default: "http://localhost:8050/media/default.png"
		},
		subject: {type: String, required: true}
	}
}

</script>

