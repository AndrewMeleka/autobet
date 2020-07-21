<template>
  <section class="modal-front">
    <!-- Button -->
    <div @click="status = !status">
      <slot name="btn"></slot>
    </div>
    <!-- Dialog / Modal  -->
    <v-dialog v-model="status" persistent :max-width="width" :fullscreen="fullscreen">
      <v-card>
        <v-card-title>
          <span class="headline" v-text="title">User Profile</span>
        </v-card-title>
        <v-card-text>
          <slot name="body"></slot>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="status = false">Close</v-btn>
          <v-btn color="success darken-1" text @click="status = false">Save</v-btn>
        </v-card-actions>
      </v-card>
      <slot></slot>
    </v-dialog>
  </section>
</template>

<script>
export default {
  props: ["width", "title", "fullscreen"],
  data: () => ({
    status: false
  })
};
</script>

<style></style>
