<template>
  <v-app>
    <v-container>
      <h1>Event Dashboard</h1>
      <v-row>
        <v-col :sm="6" :md="6">
          <v-row>
            <v-col>
              <SportsCountCard />
            </v-col>
            <v-col>
              <TheaterCountCard />
            </v-col>
            <v-col>
              <ConcertCountCard />
            </v-col>
          </v-row>
          <div>
            <DatePicker />
          </div>
        </v-col>
        <v-col :sm="6" :md="6">
          <v-row>
            <SportsTable />
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import DatePicker from "../components/DatePicker"
import SportsCountCard from "../components/SportsCountCard"
import TheaterCountCard from "../components/TheaterCountCard"
import ConcertCountCard from "../components/ConcertCountCard"
import SportsTable from "../components/SportsTable"

export default {
  components: { DatePicker, SportsCountCard, TheaterCountCard, ConcertCountCard, SportsTable }

};
</script>

<style></style>