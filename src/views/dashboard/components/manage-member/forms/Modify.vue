<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field label="Username" required></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field label="Phone number" required></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field label="First name" required></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field label="Surname" required></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field label="Account number" required></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field label="Choose Bank" required></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field label="Line ID" required></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field label="Advisor" required></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field label="How we do know us?" required></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field label="More" placeholder="Additional if not left blank" required></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field label="Password" required></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    form: {
      username: "",
      phone_number: "",
      first_name: "",
      surname: "",
      account_number: ""
    }
  })
};
</script>

<style>
</style>