<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="Email" v-model="email" required>
      <input type="password" placeholder="Mot de passe" v-model="password" required>
      <div class="error">{{ error }}</div>  
      <button>Log in</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '@/composables/useLogin'

export default {
    setup(props, context){
        // refs
        let email = ref(''),
            password = ref('');

        const { error, login } = useLogin()

        const handleSubmit = async () => {
            await login(email.value, password.value)

            if(!error.value){
                context.emit('login')
            }
        }

        return { email, password, handleSubmit, error }
    }
}
</script>

<style>

</style>