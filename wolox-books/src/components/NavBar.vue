<template lang="pug">
  .header.row
    .img-box.column
      img.wolox-img(src='@/assets/LogoWolox.png' alt='Logo Wolox')
      span.title
        | BOOKS
    button.logout(type='button' @click='logout')
      | Logout
</template>

<script>
import { removeSession } from '../services/userService'
import { routes } from '../router'

export default {
  name: 'NavBar',
  methods: {
    logout () {
      removeSession()
      this.$router.push({ name: routes.login })
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables/colors';

.header {
  align-items: center;
  border-top: 4px solid $cerulean;
  height: 60px;
  justify-content: space-around;
  width: 100%;

  .img-box {
    align-items: center;

    .wolox-img {
      height: 45px;
    }
  }
}
</style>
