<template>
  <form>
      <textarea
      placeholder="Type a message"
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
      ></textarea>
      <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { timestamp } from '../firebase/config'
import getUser from '@/composables/getUser'
import useCollection from '@/composables/useCollection'

export default {
    name:'NewChatForm',
    setup(){
        const { user } = getUser();
        const message = ref('')
        const { error, addDoc } = useCollection('messages');

        const handleSubmit = async () => {
            const chat = {
                name: user.value.displayName,
                message: message.value,
                createdAt: timestamp()
            }

            message.value = ''

            await addDoc(chat)

            if(!error){
                message.value = ''
            }
        }

        return { handleSubmit, message, error }
    }
}
</script>

<style scoped lang="scss">
    form{
        margin:10px;
    }

    textarea{
        width:100%;
        max-width:100%;
        margin-bottom:6px;
        padding:10px;
        box-sizing:border-box;
        border:0;
        border-radius:20px;
        font-family:inherit;
        outline:none;
    }
</style>