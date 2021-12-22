<template>
	<div class="flex flex-col">
		<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
				<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
					<table class="min-w-full divide-y divide-gray-200">
						<thead class="bg-gray-50">
							<tr>
								<th
									scope="col"
									class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
								>Name</th>
								<th
									scope="col"
									class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
								>Roll no</th>
								<th
									scope="col"
									class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
								>Teachers</th>
								<th
									scope="col"
									class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
								>Role</th>
								<th
									scope="col"
									class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
								>actions</th>
							</tr>
						</thead>
						<tbody class="bg-white divide-y divide-gray-200">
							<tr v-for="student in students" :key="student.email">
								<td class="px-6 py-4 whitespace-nowrap">
									<div class="flex items-center">
										<div class="flex-shrink-0 h-10 w-10">
											<img class="h-10 w-10 rounded-full" :src="student.image" alt />
										</div>
										<div class="ml-4">
											<div class="text-sm font-medium text-gray-900">{{student.name}}</div>
											<div class="text-sm text-gray-500">kathmandu</div>
										</div>
									</div>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									<div class="text-sm text-gray-900">{{student.rollno}}</div>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">all</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">student</td>
								<td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
									<router-link
										:to="{
											name: 'StudentDetail',
											params: {id: student.id}
										}
										"
									>View Detail</router-link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const people = [
	{
		name: 'Jane Cooper',
		title: 'Regional Paradigm Technician',
		department: 'Optimization',
		role: 'Admin',
		email: 'jane.cooper@example.com',
		image:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
	},
	{
		name: 'Jane Cooper',
		title: 'Regional Paradigm Technician',
		department: 'Optimization',
		role: 'Admin',
		email: 'jane.cooper@example.com',
		image:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
	},
]

import {mapGetters, mapActions} from 'vuex'

export default {
	name: 'Students',
	data() {
		return {
			people
		}
	},
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
