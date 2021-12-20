<template>
	<div>
		<div class="bg-green-600">Subjects</div>
		<div class="grid grid-cols-1">
			<div class="text-xl font-black" v-for="subject in subjects" :key="subject.id">{{subject.name}}</div>
		</div>
	</div>
</template>

<script>

import {mapGetters, mapActions} from "vuex";

export default {
	name: "Subjects",
	computed: mapGetters(["subjects"]),
	methods: mapActions(['fetchSubjects']),
	mounted() {
		this.fetchSubjects()
	}
};
</script>
