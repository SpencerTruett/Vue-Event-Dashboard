<template>
  <v-app>
    <v-card>
      <v-card-subtitle>
        <div>
          <v-icon>mdi-movie</v-icon>
        </div>
        <div>{{ count }}</div>
        <div class="mt-2">Theater Events</div>
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