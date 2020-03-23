<template>
  <v-text-field
    label="Pesquisa"
    @input="handleSearch"
    v-model="data"
  ></v-text-field>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Search',
  data () {
    return {
      data: ''
    }
  },
  methods: {
    ...mapActions(['filter']),
    handleSearch () {
      this.filter(this.data)
    }
  }
}
</script>
