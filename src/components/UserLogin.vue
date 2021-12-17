<template id="UserLogin">
	<section class="flex justify-center items-center h-screen bg-gray-800">
		<div class="max-w-md w-full bg-gray-900 rounded p-6 space-y-4">
			<div class="mb-4">
				<h2 class="text-xl font-bold text-white">SRMS</h2>
			</div>
			<div>
				<input
					class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
					type="text"
					placeholder="username"
				/>
			</div>
			<div>
				<input
					class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
					type="password"
					placeholder="password"
				/>
			</div>
			<div>
				<button
					class="mr-5 py-4 pl-3 pr-3 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
				>Sign In</button>
			</div>
		</div>
	</section>
</template>
