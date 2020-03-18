<template>
  <v-app>
    <v-row>
      <v-col :cols="3">
        <v-navigation-drawer permanent expand-on-hover>
          <v-list nav dense>
            <v-list-item link to='/list'>
              <v-list-item-icon>
                <v-icon>mdi-folder</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Lista de contatos</v-list-item-title>
            </v-list-item>
            <v-list-item link to='/new'>
              <v-list-item-icon>
                <v-icon>mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Novo contato</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col :cols="6">
        <v-content>
          <router-view></router-view>
        </v-content>
      </v-col>
    </v-row>
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
