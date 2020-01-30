<template>
  <v-app-bar app color="blue darken-3" dark>
    <v-app-bar-nav-icon @click.stop="navIconClick" />
    <v-toolbar-title class="ml-0 pl-4">
      <span class="hidden-xs-only">Vuetify-Admin-Template</span>
    </v-toolbar-title>
    <v-spacer />

    <v-btn icon>
      <v-icon>mdi-apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>
    <v-btn icon large>
      <v-avatar size="32px" item>
        <v-img
          src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
          alt="Vuetify"
      /></v-avatar>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { REVERSE_DRAWER } from "../../../store/mutation-types";

export default {
  name: "AppBar",
  methods: {
    navIconClick() {
      this.$store.commit(REVERSE_DRAWER);
    }
  }
};
</script>

<style scoped></style>
