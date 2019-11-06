<template lang='pug'>
  .books-container.row
    .book.column(v-for='book in books' :key='book.id')
      img.book-img(:src='book.image_url' alt='Book cover image')
      h2.book-title
        | {{ book.title }}
      h3.book-author
        | {{ book.author }}
</template>

<script>
import NavBar from '@/components/NavBar'
import { getBooks } from '@/services/booksService.js'

export default {
  data () {
    return {
      books: []
    }
  },
  components: {
    NavBar
  },
  async mounted () {
    const response = await getBooks()
    if (response.ok) {
      this.books = response.data
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables/colors';

.books-container {
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px auto;
  width: 80%;

  .book {
    box-shadow: 4px 4px 10px 0 $black80;
    margin: 10px;
    width: 240px;

    .book-author {
      color: $black;
      padding: 5px 0 10px 25px;
    }

    .book-img {
      margin: auto;
      width: 190px;
    }

    .book-title {
      color: $black;
      font-weight: bold;
      padding: 5px 0 0 25px;
    }
  }
}
</style>
