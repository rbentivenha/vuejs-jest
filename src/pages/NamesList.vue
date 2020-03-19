<template>
  <v-container fluid>
    <v-row>
      <Search />
    </v-row>
    <v-row>
      <Card />
    </v-row>
  </v-container>
</template>

<script>
import Card from '../components/Card'
import Search from '../components/Search'

export default {
  components: {
    Card,
    Search
  }
}
</script>
