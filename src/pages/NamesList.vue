<template>
  <v-container>
    <Search />
    <v-list three-line>
      <template v-for="(item, index) in filteredContent">
        <v-row :key="index" class="mb-4">
          <Card
            :key="index"
            :name="item.name.first"
            :phone="item.phone"
            :email="item.email"
            :end="item.location.street.name"
          />
        </v-row>
      </template>
    </v-list>
  </v-container>
</template>

<script>
import Card from '../components/Card'
import Search from '../components/Search'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Card,
    Search
  },
  async mounted () {
    await this.getRandomUser()
    await this.getRandomUsers()
  },
  computed: {
    ...mapGetters(['contact', 'filteredContent'])
  },
  methods: {
    ...mapActions(['getRandomUser', 'getRandomUsers'])
  }
}
</script>
