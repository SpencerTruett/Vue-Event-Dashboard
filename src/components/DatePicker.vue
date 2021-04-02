<template>
  <v-col>
    <v-row rows="12" sm="6">
      <h2>
        {{ new Date(dates[0]).toUTCString().split(" ").slice(0, 4).join(" ") }}
        <span
          v-if="dates.length>1"
        >
          -
          {{ new Date(dates[1]).toUTCString().split(" ").slice(0, 4).join(" ") }}
        </span>
      </h2>
    </v-row>

    <v-row rows="12" sm="6">
      <v-date-picker v-model="dates" range></v-date-picker>
    </v-row>
  </v-col>
</template>

<script>
let d = new Date().toISOString().split('T')[0];

  export default {
    data: () => ({
      dates: [ d ],
    }),
    computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
    },
  }
</script>

<style>
</style>