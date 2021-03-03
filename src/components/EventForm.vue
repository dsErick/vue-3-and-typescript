<template>
  <form @submit.prevent="$emit('addEvent', $event)">
    <div>
      <label for="category">Category</label>
      <input id="category" name="category" type="text" />
    </div>
    <div>
      <label for="title">Title</label>
      <input id="title" name="title" type="text" />
    </div>
    <div>
      <label for="description">Description</label>
      <textarea id="description" name="description"></textarea>
    </div>
    <div>
      <label for="location">Location</label>
      <input id="location" name="location" type="text" />
    </div>
    <div>
      <label for="date">Date</label>
      <input id="date" name="date" type="date" />
    </div>
    <div>
      <label for="time">Time</label>
      <input id="time" name="time" type="time" />
    </div>
    <div>
      <label for="organizer">Organizer</label>
      <input id="organizer" name="organizer" type="text" />
    </div>

    <button type="submit">Create</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EventForm",
  emits: ["addEvent"]
});
</script>
