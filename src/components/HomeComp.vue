<template>
  <v-container fluid fil-height class="home-comp">
    <v-layout justify-center align-center column pa-5 mt-5>
      <div class="display-3 font-weight-black white--text text-xs-center">
        DELICIOUS MEALS
      </div>
      <div class="display-2 font-weight-black white--text text-xs-center mb-3">
        JUST FOR YOU
      </div>
      <div class="headline font-weight-bold white--text text-xs-center">
        Have affordable Kenyan delicious meals at the comfort of your home
      </div>
      <v-btn fab class="mt-5 grey darken-4"
        ><v-icon large color="white">arrow_drop_down</v-icon></v-btn
      >
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HomeComp"
};
</script>
<style scoped>
.home-comp {
  background: url("../assets/food1.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
  max-height: 100vh;
}
</style>
