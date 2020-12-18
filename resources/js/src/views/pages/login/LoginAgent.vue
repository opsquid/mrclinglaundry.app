<template>
  <div>
    <vs-input
        v-validate="'required|min:3|max:10'"
        data-vv-validate-on="blur"
        name="idagent"
        icon-no-border
        icon="icon icon-user"
        icon-pack="feather"
        label-placeholder="Kode Agen / No Handphone"
        v-model="idagent"
        class="w-full"/>
    <span class="text-danger text-sm">{{ errors.first('idagent') }}</span>

    <vs-input
        data-vv-validate-on="blur"
        v-validate="'required|min:4|max:8'"
        type="password"
        name="password"
        icon-no-border
        icon="icon icon-lock"
        icon-pack="feather"
        label-placeholder="Password"
        v-model="password"
        class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('password') }}</span>

    <div class="flex flex-wrap justify-between my-5">
        <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Ingat login saya.</vs-checkbox>
        <router-link to="/pages/forgot-password">Lupa Password?</router-link>
    </div>
    <div class="flex flex-wrap justify-between mb-3">
      <vs-button  type="border" @click="registerUser">Daftar Agent</vs-button>
      <vs-button :disabled="!validateForm" @click="loginAgent">Masuk</vs-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      idagent: '', // mrcling
      password: '', // mrcling
      checkbox_remember_me: false
    }
  },
  computed: {
    validateForm () {
      return !this.errors.any() && this.idagent !== '' && this.password !== ''
    }
  },
  methods: {
    checkLogin () {
      // If user is already logged in notify
      if (this.$store.state.auth.isUserLoggedIn()) {

        // Close animation if passed as payload
        // this.$vs.loading.close()

        this.$vs.notify({
          title: 'Login Agen',
          text: 'Maaf. Anda telah Login!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning'
        })

        return false
      }
      return true
    },
    loginAgent () {

      if (!this.checkLogin()) return

      // Loading
      this.$vs.loading()

      const payload = {
        checkbox_remember_me: this.checkbox_remember_me,
        userDetails: {
          account: this.idagent,
          password: this.password
        }
      }

      this.$store.dispatch('auth/loginJWT', payload)
        .then(() => { this.$vs.loading.close() })
        .catch(error => {
          this.$vs.loading.close()
          this.$vs.notify({
            title: 'Error',
            text: error.message,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          })
        })
    },
    registerUser () {
      if (!this.checkLogin()) return
      this.$router.push('/pages/register').catch(() => {})
    }
  }
}

</script>

