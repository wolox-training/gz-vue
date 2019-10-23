<template lang='pug'>
  form.column.container(@submit.prevent='submit')
    img.wolox-img(src='@/assets/LogoWolox.png')
    span.books-title
      | BOOKS
    label.label(for='email')
      | Email
    input.input#email(type='text' v-model='$v.email.$model')
    .error(v-show='$v.email.$error')
      | Email is required
    label.label(for='password')
      | Password
    input.input#password(type='password' v-model='$v.password.$model')
    .error(v-show='$v.password.$error')
      | Password is required
    button.input.signup-button(type='submit')
      | Log In
    .login-container
      router-link.input.login-button(to='signup')
        | Sign Up
</template>

<script>
import { required, email, helpers } from 'vuelidate/lib/validators'
import { signIn, setSessionData } from '../services/userService'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async submit () {
      let session = {
        'email': this.email,
        'password': this.password
      }
      let response = await signIn(session);
      if (response.ok) {
        setSessionData(response.data)
        this.$router.push('/')
      }
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
    }
  }
}
</script>
<style scoped lang='scss'>
@import '../scss/variables/colors';

.container {
  background: $wild_sand;
  border-top: 6px solid $cerulean;
  margin: auto;
  width: 300px;

  .books-title {
    margin: auto;
  }

  .error {
    color: $froly;
    font-size: 11px;
    margin: auto;
    width: 250px;
  }

  .input {
    border-radius: 5px;
    height: 25px;
    margin: 2px auto;
    width: 250px;
  }

  .label {
    margin: 4px auto;
    width: 250px;
  }

  .login-container {
    border-top: 2px solid $silver_chalice;
    margin: 0 auto 24px;
    padding-top: 16px;

    .login-button {
      background: $wild_sand;
      border: 2px solid $earls_green;
      color: $earls_green;
      height: 35px;
      line-height: 35px;
      margin: 0;
      text-align: center;
    }
  }

  .signup-button {
    background: $earls_green;
    color: $white;
    height: 35px;
    line-height: 35px;
    margin: 16px auto;
    text-align: center;
  }

  .wolox-img {
    height: 90px;
    margin: auto;
    width: 270px;
  }
}
</style>
