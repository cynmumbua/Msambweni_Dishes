<template>
  <span>
    <home-meal-plans></home-meal-plans>
    <meal-recipes></meal-recipes>
  </span>
</template>
<script>
import HomeMealPlans from "@/components/HomeMealPlans.vue";
import MealRecipes from "@/components/MealRecipes.vue";
export default {
  name: "Menu",
  components: {
    HomeMealPlans,
    MealRecipes
  }
};
</script>

<style scoped></style>
