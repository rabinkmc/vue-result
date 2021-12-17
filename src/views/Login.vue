<template>
	<form v-on:submit.prevent="login">
		<user-login></user-login>
	</form>
</template>
<script>
import UserLogin from '../components/UserLogin.vue'

export default {
	name: 'Login',
	data() {
		return {
			username: '',
			password: '',
		}
	},
	components: {
		UserLogin
	}
}
</script>
