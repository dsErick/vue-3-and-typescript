<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <div style="display: none">
    <v-events />
  </div>

  <v-todos />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import VEvents from './components/Events.vue';
import VTodos from './components/Todos.vue';

export default defineComponent({
  name: "App",
  components: {
    VEvents,
    VTodos,
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
