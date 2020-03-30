<template>
  <v-row justify="center">
    <v-card max-width="400">
      <v-list-item>
        <v-list-item-avatar
          color="blue white--text"
          left
          >{{initials}}
        </v-list-item-avatar>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>{{ name }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ phone }} - {{ email }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              {{ end }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: 'Card',
  props: {
    name: {
      type: String,
      default: 'Nome'
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
  },
  computed: {
    initials() {
      return this.name.charAt(0);
    }
  }
}
</script>
