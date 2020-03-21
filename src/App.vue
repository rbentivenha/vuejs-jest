<template>
  <v-app>
    <v-bottom-navigation dark absolute>
      <v-btn link to="/list">
        <span>Contatos</span>
        <v-icon>mdi-cards-variant</v-icon>
      </v-btn>
      <v-btn link to="/new" disabled>
        <span>Novo contato</span>
        <v-icon>mdi-account-multiple-plus-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-content>
      <v-container>
        <v-row justify="center">
          <v-responsive
            class="overflow-y-auto"
            max-height="740"
            max-width="450"
          >
            <router-view></router-view>
          </v-responsive>
        </v-row>
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
