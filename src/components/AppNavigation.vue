<template>
  <span>
    <v-navigation-drawer
      app
      v-model="drawer"
      class="grey lighten-2"
      dark
      disable-resize-watcher
    >
      <v-list :rounded="rounded">
        <template v-for="(item, index) in items">
          <v-list-title :key="index">
            <v-list-title-content>{{ item.title }}</v-list-title-content>
          </v-list-title>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="grey darken-4" dark>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
        color="white"
      ></v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title class="ma-2">{{ appTitle }}</v-toolbar-title>
      <v-btn flat class="hidden-sm-and-down ma-2">Menu</v-btn>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn flat class="hidden-sm-and-down ma-2">SIGN IN</v-btn>
      <v-btn color="grey lighten-3" class="hidden-sm-and-down ma-2">JOIN</v-btn>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      appTitle: "Msambweni Dishes",
      drawer: false,
      items: [{ title: "Menu" }, { title: "Sign In" }, { title: "Join" }]
    };
  }
};
</script>

<style scoped></style>
