<template>
  <v-app>
    <v-container fluid class="blue lighten-1 pt-0">
      <v-row justify="center">
        <v-card width="450">
          <v-bottom-navigation grow max-width="450" dark>
            <v-btn x-large link to="/list" height="55">
              <span>Contatos</span>
              <v-icon>mdi-cards-variant</v-icon>
            </v-btn>
            <v-btn x-large link to="/new" disabled height="55">
              <span>Novo contato</span>
              <v-icon>mdi-account-multiple-plus-outline</v-icon>
            </v-btn>
          </v-bottom-navigation>
          <v-content>
            <v-container>
              <v-responsive
                class="overflow-y-auto"
                height="670"
                width="450"
              >
                <router-view></router-view>
              </v-responsive>
            </v-container>
          </v-content>
        </v-card>
      </v-row>
    </v-container>
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