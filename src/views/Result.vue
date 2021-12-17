<template>
	<div class="result"></div>
	<student-result
		:id="result.id"
		:name="result.name"
		:subjects="result.subjects"
		:percentage="result.percentage"
		:total="result.total"
	></student-result>
</template>

<script>
import axios from 'axios'
import StudentResult from '../components/StudentResult.vue'
export default {
	name: 'Result',
	props: ['id'],
	data() {
		return {
			result: {
				"id": 1,
				"name": "Student",
				"subjects": {
					"english": 0,
					"maths": 0,
					"nepali": 0,
					"science": 0,
					"social": 0
				},
				"percentage": 0,
				"total": 0
			},
		}
	},

	components: {
		StudentResult
	},

	mounted() {
		let base_url = 'http://localhost:8050/'
		let id = this.id
		let url = base_url + 'result/' + id
		axios.get(url).then(response => {this.result = response.data})
	}
}
</script>
