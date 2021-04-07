<template>
  <v-app id="app">
    <v-main>
      <v-container>
        <v-row>
          <v-col sm="12" lg="6" xl="5">
            <v-row class="mb-6">
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
            <v-row>
              <DatePicker class="mb-5" />
            </v-row>
          </v-col>
          <v-col sm="12" lg="6" xl="7">
            <SportsTable class="mb-6" />
            <TheaterTable class="mb-6" />
            <ConcertTable class="mb-6" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import DatePicker from "../components/DatePicker"
import SportsCountCard from "../components/SportsCountCard"
import TheaterCountCard from "../components/TheaterCountCard"
import ConcertCountCard from "../components/ConcertCountCard"
import SportsTable from "../components/SportsTable"
import TheaterTable from "../components/TheaterTable"
import ConcertTable from "../components/ConcertTable"

export default {
  components: { DatePicker, SportsCountCard, TheaterCountCard, ConcertCountCard, SportsTable, TheaterTable, ConcertTable }

};
</script>

<style></style>