<template>
  <section id="promotion">
    <UtilCard title="Add / delete promotions">
      <PromoteTable />
    </UtilCard>
  </section>
</template>

<script>
import UtilCard from "@/components/util/Card.vue";
import PromoteTable from "./components/PromoteTable";
export default {
  components: {
    UtilCard,
    PromoteTable
  }
};
</script>

<style>
</style>