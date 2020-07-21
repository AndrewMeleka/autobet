<template>
  <v-card class="mx-auto">
    <v-toolbar color="primary" dark dense>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <slot name="action-nav"></slot>
    </v-toolbar>
    <v-card-text>
      <slot></slot>
    </v-card-text>
  </v-card>
</template>


<script>
export default {
  props: {
    title: {
      required: true
    }
  }
};
</script>

<style>
</style>