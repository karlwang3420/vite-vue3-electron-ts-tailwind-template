<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
let a = 2;
a++;
</script>

<template>
  <div class="flex flex-row justify-center">
    <img alt="Vue logo" width="120rem" src="./assets/vite.svg" />
    <img alt="Vue logo" width="120px" src="./assets/logo.png" />
    <img alt="Vue logo" width="120" src="./assets/electron.png" />
    <img alt="Vue logo" width="120" src="./assets/ts.png" />
  </div>
  <HelloWorld msg="Hello Vite + Vue 3 + Electron + TypeScript" />
  <div class="text-3xl font-bold underline">Hello</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  margin: 3px;
}
</style>
