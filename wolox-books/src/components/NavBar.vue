<template lang='pug'>
  .header.row
    .img-box.column
      img.wolox-img(src='@/assets/LogoWolox.png')
      span
        | BOOKS
    a.logout(@click='logout')
      | Logout
</template>

<script>
import { removeSession } from '../services/userService'

export default {
  methods: {
    logout () {
      removeSession()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang='scss'>
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
