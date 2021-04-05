<template>
  <v-card>
    <h3>Popular Theater Event</h3>
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
              ${{event.stats.lowest_price}} -
              ${{event.stats.highest_price}}
            </a>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
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