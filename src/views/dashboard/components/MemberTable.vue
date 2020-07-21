<template>
  <v-data-table :headers="headers" :items="items" :items-per-page="5" class="elevation-1">
    <template v-slot:item.modify>
      <v-btn color="primary" small fab>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Application Date",
          align: "start",
          sortable: false,
          value: "applicationDate"
        },
        { text: "Modify", value: "modify" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ],
      items: [
        {
          applicationDate: "2020 - 07",
          modify: null,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        }
      ]
    };
  }
};
</script>

<style>
</style>