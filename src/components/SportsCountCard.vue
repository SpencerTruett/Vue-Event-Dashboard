<template>
  <v-app>
    <v-card class="pa-4" color="red lighten-2">
      <v-card-subtitle class="text-center">
        <div>
          <v-icon x-large color="white text-center">mdi-football</v-icon>
        </div>
        <h1 class="text-center">{{ count }}</h1>
        <h5 class="text--secondary text-center">Sporting Events</h5>
      </v-card-subtitle>
    </v-card>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["sporting"]),
    count() {
      if (!this.sporting.meta || !this.sporting.meta.total) {
        return 0;
      }
      return this.sporting.meta.total;
    }
  }
};
</script>

<style>
</style>