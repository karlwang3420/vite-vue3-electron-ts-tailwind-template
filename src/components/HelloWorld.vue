<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
count.value = 2;
setTimeout(() => {
  window.api.send("context-bridge-test", "ping");
}, 2000);

window.api.on("context-bridge-test2", (val: any) => {
  console.log(val);
});
</script>

<template>
  <h1 class="text-2xl font-bold">Hello World</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button
    type="button"
    class="border p-1 m-1 rounded-xl bg-blue-300"
    @click="count++"
  >
    count is: {{ count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
