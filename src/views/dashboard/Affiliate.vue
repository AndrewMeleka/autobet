<template>
  <section id="affilPage">
    <UtilCard title="Affiliate">
      <v-row class="content my-5">
        <v-col class="d-flex align-items-center" cols="6">
          <v-select
            v-model="form.bouns"
            dense
            :items="bouns"
            label="Bouns type"
            outlined
          ></v-select>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="form.maxBouns"
            dense
            label="Maximum bouns"
            placeholder="Maximum bouns"
            clearable
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="form.topTurn"
            dense
            label="Top turn"
            placeholder="Top turn"
            clearable
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-switch v-model="form.onOff" inset label="on / off"></v-switch>
        </v-col>
        <v-col cols="12">
          <v-radio-group v-model="form.bounsRadio" :mandatory="false">
            <v-radio label="Bouns for every deposit" value="radio-1"></v-radio>
            <v-radio
              label="Bouns for new member promotion only"
              value="radio-2"
            ></v-radio>
            <v-radio label="First deposit bouns only" value="radio-3"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <!-- condation -->
      <UtilCard class="mb-5" title="condation">
        <v-row>
          <v-col cols="4">
            <v-text-field
              v-model="form.condation.low"
              dense
              label="The lowest"
              clearable
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="form.condation.max"
              dense
              label="Maximum"
              clearable
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="form.condation.bouns"
              dense
              label="Bouns"
              clearable
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
      </UtilCard>
      <!-- add/ delete images -->
      <UtilCard title="Add / delete images">
        <v-file-input
          v-model="form.images"
          multiple
          label="Add images here"
          prepend-icon="mdi-camera"
        ></v-file-input>
        <v-simple-table dense>
          <template v-slot:default>
            <thead class="primary">
              <tr>
                <th class="text-left">Image</th>
                <th class="text-left">Date added</th>
                <th class="text-left">delete</th>
              </tr>
            </thead>
            <tbody></tbody>
          </template>
        </v-simple-table>
      </UtilCard>
    </UtilCard>
  </section>
</template>

<script>
import UtilCard from "@/components/util/Card.vue";
export default {
  components: {
    UtilCard
  },
  data: () => ({
    bouns: [""],
    form: {
      bouns: null,
      maxBouns: null,
      topTurn: null,
      onOff: false,
      bounsRadio: null,
      images: [],
      condation: {
        low: null,
        max: null,
        bouns: null
      }
    }
  })
};
</script>

<style lang="scss" scoped>
thead {
  * {
    color: white !important;
  }
}
</style>
