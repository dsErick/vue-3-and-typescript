<template>
  <div class="hello">
    <div class="event-card">
      <h1>{{ event.title }}</h1>
      <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
      <p>{{ event.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { EventItem } from "../types";

const event = {
  id: 123,
  category: "animal welfare",
  title: "Cat Adoption Day",
  description: "Find your new feline friend at this event.",
  location: "Meow Town",
  date: "January 28, 2022",
  time: "12:00",
  organizer: "Kat Laydee"
};

export default defineComponent({
  name: "HelloWorld",
  data() {
    return {
      event: {} as EventItem // Type Assertion
    };
  },
  mounted() {
    this.event = event
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-card {
  display: inline-block;
  padding: 20px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
