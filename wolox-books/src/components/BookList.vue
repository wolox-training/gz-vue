<template lang='pug'>
  .books-container.row
    router-link.book.column(v-for='book in books' :key='book.id' :to='{ name: routes.detail, params: { id: book.id }}')
      img.book-img(:src='book.image_url' :alt='book.title')
      h2.book-title
        | {{ book.title }}
      h3.book-author
        | {{ book.author }}
</template>

<script>
import { mapActions, mapState } from 'vuex'
import NavBar from '@/components/NavBar'

export default {
  data () {
    return {
      book: ''
    }
  },
  components: {
    NavBar
  },
  computed: {
    ...mapState({
      books: state => state.books
    })
  },
  async mounted () {
    this.getBooks()
  },
  methods: {
    ...mapActions([
      'getBooks'
    ])
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
      padding: 5px 0 10px 25px;
    }

    .book-img {
      margin: auto;
      width: 190px;
    }

    .book-title {
      color: #000;
      font-weight: bold;
      padding: 5px 0 0 25px;
    }
  }
}
</style>
