<template></template>
<script setup>
import { apiSignOut } from "@/function/api/auth";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/users";
const router = useRouter();
const userStore = useUserStore();

onMounted(async () => {
  const token = userStore.getSanctumToken();
  apiSignOut(token); // no need to await since we will remove the token regardless of the response
  userStore.reset();
  router.replace({ name: "SignIn" });
  console.log("User signed out and token removed.");
});
</script>