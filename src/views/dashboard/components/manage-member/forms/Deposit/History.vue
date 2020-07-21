<template>
  <section id="mangeMembPage">
    <UtilCard title="Deposit report">
      <!-- Date -->
      <div class="date-select mt-8">
        <v-text-field dense label="Date" readonly outlined></v-text-field>
        <div class="body">To</div>
        <v-text-field dense label="Date" readonly outlined></v-text-field>
      </div>
      <div class="filter-btns">
        <v-btn v-for="(btn, i) in Object.keys(filterBtns)" :key="`b${i}`" outlined>{{ btn }}</v-btn>
      </div>
      <v-divider class="my-5"></v-divider>
      <!-- Deposit Table -->
      <DepositTable />
    </UtilCard>
  </section>
</template>

<script>
import UtilCard from "@/components/util/Card.vue";
import DepositTable from "./Table";
export default {
  components: {
    UtilCard,
    DepositTable
  },
  data: () => ({
    dateMenu: [false, false],
    userSelects: [],

    form: {
      date: {
        from: null,
        to: null
      }
    },
    filterBtns: {
      all: null,
      today: null,
      yesterday: null,
      "7 days back": null,
      "30 days back": null,
      "1 year back": null
    }
  })
};
</script>
<style lang="scss" scoped>
.date-select,
.filter-btns {
  display: flex;
  margin-right: 220px;
  > * {
    margin: 0 20px;
  }
}
.filter-btns {
  > * {
    margin-right: 0;
  }
}
</style>
