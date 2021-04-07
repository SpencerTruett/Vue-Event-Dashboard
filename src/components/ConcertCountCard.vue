<template>
  <v-app>
    <v-card class="pa-4" color="purple lighten-2">
      <v-card-subtitle class="text-center">
        <div>
          <v-icon x-large color="white text-center">mdi-music</v-icon>
        </div>
        <h1 class="text-center">{{ count }}</h1>
        <h5 class="text--secondary text-center">Concert Events</h5>
      </v-card-subtitle>
    </v-card>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["concert"]),
    count() {
      if (!this.concert.meta || !this.concert.meta.total) {
        return 0;
      }
      return this.concert.meta.total;
    }
  }
};
</script>

<style>
</style>