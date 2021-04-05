<template>
  <v-app>
    <v-card>
      <v-card-subtitle>
        <div>
          <v-icon>mdi-football</v-icon>
          {{ count}}
        </div>
        <div class="mt-2">Sporting Events</div>
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