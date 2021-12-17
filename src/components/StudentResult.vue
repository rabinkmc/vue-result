<template>
	<div class="py-10 min-h-100 flex justify-center items-center">
		<div class="w-48 h-64 rounded-xl bg-gray-200 flex flex-col">
			<img class="w-auto rounded-t-xl" src="http://localhost:8050/media/default.png" alt="avatar" />
			<div class="text-center flex flex-col p-2">
				<span class="text-base font-bold">{{name}}</span>
				<span class="text-xs italic">{{id}}</span>
			</div>

			<div>
				<div class="flex py-2" v-for="(marks,subject) in subjects" :key="subject">
					<div class="flex-auto">{{subject}}</div>
					<div class="flex-auto">{{marks}}</div>
				</div>
				<div>percentage:{{percentage}}</div>
				<div>total:{{total}}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'StudentResult',
	props: {
		id: {type: Number, required: true},
		name: {type: String, requird: true},
		subjects: {
			type: Object, required: true
		},
		percentage: {
			type: Number, required: true
		},
		total: {
			type: Number, required: true
		}
	}

}
</script>
