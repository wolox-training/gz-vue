<template lang="pug">
  .main-container
    navbar
    book-list
</template>

<script>
import Navbar from '../components/NavBar'
import BookList from '../components/BookList'

export default {
  components: { Navbar, BookList }
}
</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
}
</style>
