<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <div>
    <label for="eventId">Choose a event</label>
    <select id="eventId" v-model="eventId">
        <option value="0"></option>
        <option
          v-for="event in events"
          :value="event.id"
          :key="event.id"
        >
          {{ event.title }}
        </option>
    </select>
  
    <event-detail
      v-if="events.find(event => event.id === eventId)"
      :event="events.find(event => event.id === eventId)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EventDetail from "./components/EventDetail.vue";
import { EventItem } from "./types";
import * as events from "./assets/data/events";

export default defineComponent({
  name: "App",
  components: {
    EventDetail
  },
  data() {
    return {
      events: [] as EventItem[],
      eventId: 0
    };
  },
  mounted() {
      this.events = events.default
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
