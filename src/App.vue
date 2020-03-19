<template>
  <v-app>
    <v-bottom-navigation dark grow absolute>
      <v-btn link to="/list">
        <span>Contatos</span>
        <v-icon>mdi-cards-variant</v-icon>
      </v-btn>
      <v-btn link to="/new">
        <span>Novo contato</span>
        <v-icon>mdi-account-multiple-plus-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  })
}
</script>
