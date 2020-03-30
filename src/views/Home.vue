<template>
  <span>
    <home-comp></home-comp>
    <home-info></home-info>
    <home-meal-plans></home-meal-plans>
  </span>
</template>

<script>
import HomeComp from "@/components/HomeComp.vue";
import HomeInfo from "@/components/HomeInfo.vue";
import HomeMealPlans from "@/components/HomeMealPlans";

export default {
  name: "Home",
  components: {
    HomeComp,
    HomeInfo,
    HomeMealPlans
  }
};
</script>
