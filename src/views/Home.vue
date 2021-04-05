<template>
  <v-app>
    <v-container>
      <h1>Event Dashboard</h1>
      <v-col :sm="12" :md="6">
        <v-row>
          <v-col>
            <SportsCountCard />
          </v-col>
          <v-col>
            <TheaterCountCard />
          </v-col>
        </v-row>
        <div>
          <DatePicker />
        </div>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
import DatePicker from "../components/DatePicker"
import SportsCountCard from "../components/SportsCountCard"
import TheaterCountCard from "../components/TheaterCountCard"

export default {
  components: { DatePicker, SportsCountCard, TheaterCountCard }

};
</script>

<style></style>