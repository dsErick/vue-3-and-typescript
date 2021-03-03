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
import { defineComponent, PropType } from "vue";
import { EventItem } from "../types";

export default defineComponent({
  name: "HelloWorld",
  props: {
    event: {
      type: Object as PropType<EventItem>,
      required: true
    }
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
  margin: 18px 0;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
