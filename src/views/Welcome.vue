<template>
  <div class="welcome container">
      <p>Welcome</p>
      <div v-if="showLogin">
          <h2>Login</h2>
          <LoginForm @login="enterChat" />
          <p class="switch-form">No account yet ? <span @click="showLogin = !showLogin">Sign up</span></p>
      </div>

      <div v-else>
              <h2>Sign up</h2>
              <SignupForm @signup="enterChat"/>
            <p class="switch-form">Already registered ? <span @click="showLogin = !showLogin">Log in</span></p>
      </div>
  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue'
import LoginForm from '@/components/LoginForm.vue'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
    name:'Welcome',
    components: { SignupForm, LoginForm },
    setup(){
        const showLogin = ref(true)
        const router = useRouter()

        const enterChat = () => {
            router.push({name: 'Chatroom'});
        }

        return { showLogin, enterChat }
    }
}
</script>

<style lang="scss">
    .welcome{
        text-align: center;
        padding:20px 0;

        form{
            width: 300px;
            margin: 20px auto;
            
            label{
                display:block;
                margin:20px 0 10px;
            }

            input{
                width: 100%;
                padding:10px 20px;
                border-radius:20px;
                border:1px solid #eee;
                outline:none;
                color:#999;
                margin:10px auto;
            }
        }

        .switch-form{
            span{
                font-weight:bold;
                text-decoration:underline;
                cursor:pointer;
            }
        }
    }
</style>