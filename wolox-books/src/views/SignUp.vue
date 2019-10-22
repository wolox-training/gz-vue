<template lang='pug'>
  form.column.container
    img.wolox-img(src='@/assets/LogoWolox.png')
    span.books-title
      | BOOKS
    label.label
      | First name
    input.input(type='text' v-model='firstName')
    label.label
      | Last name
    input.input(type='text' v-model='lastName')
    label.label
      | Email
    input.input(type='text' v-model='email')
    .error(v-show='emailRequired')
      | Email is required
    .error(v-show='invalidEmail')
      | Email is invalid
    label.label
      | Password
    input.input(type='password' v-model='password')
    .error(v-show='passwordRequired')
      | Password is required
    .error(v-show='invalidPassword')
    input.input.signup-button(v-on:click='submit' type='submit' value='Sign Up')
    .login-container
      router-link.input.login-button(to='login')
        | Login
</template>

<script src="vuelidate/dist/vuelidate.min.js"></script>
<script>
import { required, email, helpers } from 'vuelidate/lib/validators'
import { signUp } from '../services/userService'
let passwordValidation = helpers.regex('password', /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/)

export default {
  name: 'SignUp',
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      locale: 'en',
      errors: false
    }
  },
  methods: {
    async submit () {
      if (this.$v.$invalid) {
        this.errors = true
      }
      else {
        let user = {
          'email': this.email,
          'password': this.password,
          'password_confirmation': this.password,
          'first_name': this.firstName,
          'last_name': this.lastName,
          'locale': this.locale
        }
        let response = await signUp(user)
        console.log(response.data)
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
      passwordValidation
    }
  },
  computed: {
    invalidEmail() {
      return this.errors && !this.$v.email.email
    },
    emailRequired() {
      return this.errors && !this.$v.email.required
    },
    passwordRequired() {
      return this.errors && !this.$v.password.required
    },
    invalidPassword() {
      return this.errors && !this.$v.password.passwordValidation
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
    margin: 2px auto 2px;
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
