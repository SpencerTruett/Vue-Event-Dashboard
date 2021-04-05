<template>
  <v-app>
    <v-card>
      <v-card-subtitle>
        <div>
          <v-icon>mdi-music</v-icon>
        </div>
        <div>{{ count }}</div>
        <div class="mt-2">Concert Events</div>
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