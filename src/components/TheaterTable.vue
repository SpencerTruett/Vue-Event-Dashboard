<template>
  <v-card elevation="2">
    <h2 class="pa-3 blue--text text--lighten-1">Popular Theater Events</h2>
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">Event</th>
          <th class="text-left">Venue</th>
          <th class="text-left">Date</th>
          <th class="text-left">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in topTheaters" :key="event.id">
          <td>{{ event.short_title }}</td>
          <td>{{ event.venue.name }}</td>
          <td>{{ new Date(event.datetime_local).toUTCString().split(" ").slice(0, 3).join(" ") }}</td>
          <td>
            <a :href="event.url" target="_blank">
              <div v-if="event.stats.lowest_price != null">
                ${{event.stats.lowest_price}} -
                ${{event.stats.highest_price}}
              </div>
              <p v-if="event.stats.lowest_price == null">
                <em>No Tickets</em>
              </p>
            </a>
          </td>
        </tr>
      </tbody>
      <router-link v-if="topTheaters.length" to="/allTheaters">
        <v-btn text>View All</v-btn>
      </router-link>
    </v-simple-table>
    <p v-if="!topTheaters.length" class="text-center pa-12 text--secondary">
      <em>No available events in the selected dates</em>
    </p>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["topTheaters"])
  }
}
</script>

<style>
</style>