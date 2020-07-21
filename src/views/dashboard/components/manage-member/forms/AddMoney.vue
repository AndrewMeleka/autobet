<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field dense outlined label="Specify Amount" required></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field dense outlined label="Top turn" required></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-textarea dense outlined label="Note" placeholder="Additional if not left blank" required></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    form: {}
  })
};
</script>

<style>
</style>