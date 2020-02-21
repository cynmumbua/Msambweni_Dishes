<template>
  <span>
    <home-comp></home-comp>
    <home-info></home-info>
  </span>
</template>

<script>
import HomeComp from "@/components/HomeComp.vue";
import HomeInfo from "@/components/HomeInfo.vue";

export default {
  name: "Home",
  components: {
    HomeComp,
    HomeInfo
  }
};
</script>
