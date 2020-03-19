<template>
  <v-row align="center" justify="center" lg="12" class="blue">
    <v-card flat :cols="1">
      <v-card-title class="blue-grey darken-1 white--text"
        >Novo contato</v-card-title
      >
      <v-form v-model="valid">
        <v-container fluid>
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="40"
            label="Nome"
            required
          ></v-text-field>

          <v-text-field
            v-model="lastname"
            :counter="40"
            label="Sobrenome"
            required
          ></v-text-field>

          <v-text-field
            v-model="job"
            :counter="40"
            label="Profissão"
            required
          ></v-text-field>

          <v-text-field
            v-model="address"
            :counter="40"
            label="Endereço"
            required
          ></v-text-field>

          <v-row>
            <v-col>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="phone"
                label="Telefone"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-btn color="primary">Salvar</v-btn>
            </v-col>
            <v-col justify="end" align="end">
              <v-btn color="error">Limpar</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    phone: '',
    address: '',
    job: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  })
}
</script>
