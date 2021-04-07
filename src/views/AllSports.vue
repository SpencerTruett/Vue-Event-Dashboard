<template>
  <v-card>
    <h3>All Sporting Event</h3>
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
        <tr v-for="event in this.sporting.events" :key="event.id">
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
    </v-simple-table>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["sporting"])
  }
}
</script>

<style>
</style>