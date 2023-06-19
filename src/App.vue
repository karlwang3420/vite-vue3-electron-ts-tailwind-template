<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import { useRouter } from "vue-router";
let a = 2;
a++;

// because electron doesn't go to the home page by default after build, we need to do it manually
const router = useRouter();
router.push("/");
</script>

<template>
  <RouterView></RouterView>
</template>

<style></style>
