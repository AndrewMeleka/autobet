<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="5"
    class="elevation-5"
  >
    <!-- Modify Column -->
    <template v-slot:item.modify>
      <Dialog title="Edit user" width="800" fullscreen>
        <template v-slot:btn>
          <v-btn color="grey" dark small fab>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </template>
        <template v-slot:body>
          <ModifyForm />
        </template>
      </Dialog>
    </template>
    <!-- Add Money Column -->
    <template v-slot:item.addmoney>
      <Dialog title="Add money to user" width="800">
        <template v-slot:btn>
          <v-btn color="success" small fab>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <template v-slot:body>
          <AddMoneyForm />
        </template>
      </Dialog>
    </template>
    <!-- Reduce Money Column -->
    <template v-slot:item.reducemoney>
      <Dialog title="Withdraw money user" width="800">
        <template v-slot:btn>
          <v-btn color="primary" small fab>
            <v-icon>mdi-minus</v-icon>
          </v-btn>
        </template>
        <template v-slot:body>
          <ReduceMoneyForm />
        </template>
      </Dialog>
    </template>
    <!-- Deposit History Column -->
    <template v-slot:item.deposithistory>
      <Dialog title="Deposit History" width="800" fullscreen>
        <template v-slot:btn>
          <v-btn color="blue" dark small fab>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </template>
        <template v-slot:body>
          <DepositHistory />
        </template>
      </Dialog>
    </template>
  </v-data-table>
</template>

<script>
import Dialog from "@/components/util/Modal.vue";
import ModifyForm from "./forms/Modify";
import AddMoneyForm from "./forms/AddMoney";
import ReduceMoneyForm from "./forms/ReduceMoney";
import DepositHistory from "./forms/Deposit/History";
export default {
  components: {
    Dialog,
    ModifyForm,
    AddMoneyForm,
    ReduceMoneyForm,
    DepositHistory
  },
  data: () => ({
    headers: [
      {
        text: "Application Date",
        align: "start",
        sortable: false,
        value: "applicationDate"
      },
      { text: "Modify", value: "modify" },
      { text: "Add money", value: "addmoney" },
      { text: "Reduce Money", value: "reducemoney" },
      { text: "Deposit History", value: "deposithistory" }
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
  })
};
</script>

<style></style>
