<template lang='pug'>
  .books-container.row
    .book.column(v-for='book in books' :key='book.id')
      img.book-img(:src='book.image_url' :alt='book.title')
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

.books-container {
  flex-wrap: wrap;
  margin: 40px auto;
  justify-content: center;
  width: 80%;

  .book {
    box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.5);
    margin: 10px;
    width: 240px;

    .book-author {
      color: #000;
      padding: 5px;
    }

    .book-img {
      margin: auto;
      width: 190px;
    }

    .book-title {
      color: #000;
      font-weight: bold;
      padding: 5px;
    }
  }
}
</style>
