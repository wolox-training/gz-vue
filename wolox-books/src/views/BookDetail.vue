<template lang="pug">
  .main-container
    navbar
    .book-container.row
      img.book-img(:src='book.image_url' alt='Book cover image')
      .book-data.column
        .book-title
          h1.title
            | {{ book.title }}
          span.genre
            | ({{ book.genre }})
        .book-property
          span.property-name
            | Book author:
          span.property-value
            | {{ book.author }}
        .book-property
          span.property-name
            | Publisher:
          span.property-value
            | {{ book.publisher }}
        .book-property
          span.property-name
            | Year of publication:
          span.property-value
            | {{ book.year }}
</template>

<script>
import Navbar from '../components/NavBar'

import { getBook } from '@/services/booksService'

export default {
  data () {
    return {
      book: ''
    }
  },
  components: { Navbar },
  async mounted () {
    const response = await getBook(this.$route.params.id)
    if (response.ok) {
      this.book = response.data
    }
    console.log(this.book)
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables/colors';

.main-container {
  .book-container {
    box-shadow: 4px 4px 10px 0 $black80;
    margin: 40px auto;
    width: 1366px;

    .book-data {
      margin: 20px;
      width: 75%;

      .book-title {
        border-bottom: 4px solid $earls_green;
        padding: 8px 0;

        .genre {
          font-size: 16px;
          text-indent: 5px;
        }

        .title {
          color: $black;
          font-size: 16px;
          font-weight: bold;
        }
      }

      .book-property {
        margin: 10px 0;

        .property-name {
          color: $black;
          font-size: 14px;
          font-weight: bold;
        }

        .property-value {
          font-size: 14px;
          text-indent: 5px;
        }
      }
    }

    .book-img {
      padding: 20px;
      width: 250px;
    }
  }
}
</style>
