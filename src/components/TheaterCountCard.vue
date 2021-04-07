<template>
  <v-app>
    <v-card class="pa-4" color="blue lighten-2">
      <v-card-subtitle class="text-center">
        <div>
          <v-icon x-large color="white text-center">mdi-movie</v-icon>
        </div>
        <h1 class="text-center">{{ count }}</h1>
        <h5 class="text--secondary text-center">Theater Events</h5>
      </v-card-subtitle>
    </v-card>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["theater"]),
    count() {
      if (!this.theater.meta || !this.theater.meta.total) {
        return 0;
      }
      return this.theater.meta.total;
    }
  }
};
</script>

<style>
</style>