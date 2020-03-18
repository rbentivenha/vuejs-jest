<template>
  <v-container>
    <v-row justify="center">
      <v-card shaped>
        <v-list-item>
          <v-avatar
            color="blue white--text"
            height="80"
            width="80"
            class="title"
            >LBB</v-avatar
          >
          <v-list-item-content>
            <v-card-text>
              <v-card-title>{{ name }}</v-card-title>
              <v-card-subtitle> {{ job }} </v-card-subtitle>
              <v-row>{{ phone }} - {{ email }}</v-row>
              <v-row>{{ end }}</v-row>
            </v-card-text>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MyFirstComponent',
  props: {
    name: {
      type: String,
      default: 'Nome'
    },
    job: {
      type: String,
      default: 'Profissão'
    },
    phone: {
      type: String,
      default: '(14) 982048847'
    },
    email: {
      type: String,
      default: 'seu@email.com'
    },
    end: {
      type: String,
      default: 'Endereço'
    }
  },
  data () {
    return {}
  }
}
</script>
