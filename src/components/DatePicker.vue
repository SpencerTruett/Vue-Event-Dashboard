<template>
  <v-col>
    <v-row rows="12" sm="6">
      <h2>
        {{ dates[0] }}
        <span v-if="dates.length>1">-</span>
        {{ dates[1] }}
      </h2>
    </v-row>

    <v-row rows="12" sm="6">
      <v-date-picker v-model="dates" range></v-date-picker>
    </v-row>
  </v-col>
</template>

<script>
let d = new Date().toISOString().split('T')[0];
console.log(Date())

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