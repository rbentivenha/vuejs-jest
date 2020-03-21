<template>
  <v-row justify="center">
    <v-col :cols="12" lg="5">
      <v-text-field label="Pesquisa" @input="handleSearch" v-model="data"></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex';

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
      this.filter(this.data);
    }
  }
}
</script>
