<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="Nom" v-model="name" required>
      <input type="text" placeholder="Email" v-model="email" required>
      <input type="password" placeholder="Mot de passe" v-model="password" required>
      <div class="error">{{ error }}</div>
      <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '@/composables/useSignup'

export default {
    setup(props, context){
        const { error, signup } = useSignup();

        // refs
        let name = ref(''),
            email = ref(''),
            password = ref('');

        const handleSubmit = async () => {
            await signup(email.value, password.value, name.value)
            
            if(!error.value){
                context.emit('signup')
            }
        }

        return { name, email, password, handleSubmit, error }
    }
}
</script>

<style>

</style>