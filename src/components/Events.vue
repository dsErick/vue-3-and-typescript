<template>
<event-form @addEvent="addEvent" />

<div style="margin: 2rem 0">
  <label for="eventId">Choose a event</label>
  <select id="eventId" v-model="eventId">
    <option value="0"></option>
    <option v-for="event in events" :value="event.id" :key="event.id">
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
import { defineComponent } from 'vue'

import EventDetail from "@/components/EventDetail.vue";
import EventForm from "@/components/EventForm.vue";

import { EventItem } from "@/types";

import events from "@/assets/data/events";

export default defineComponent({
  name: 'Events',
  components: {
    EventDetail,
    EventForm
  },
  data() {
    return {
      events: [] as EventItem[],
      eventId: 0
    };
  },
  computed: {
    lastEvent(): EventItem {
      return this.events[this.events.length - 1];
    }
  },
  mounted() {
    this.events = events;
  },
  methods: {
    addEvent(e: any) {
      const {
        category,
        title,
        description,
        location,
        date,
        time,
        organizer
      } = e.target;

      const event: EventItem = {
        id: Math.floor(Math.random() * 99999),
        category: category.value,
        title: title.value,
        description: description.value,
        location: location.value,
        date: date.value,
        time: time.value,
        organizer: organizer.value
      };

      this.events.unshift(event);
    }
  }
})
</script>

<style>
</style>
