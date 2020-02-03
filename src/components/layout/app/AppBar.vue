<template>
  <v-app-bar app color="blue darken-3" dark>
    <v-app-bar-nav-icon @click.stop="navIconClick">
      <svg-icon name="menu" />
    </v-app-bar-nav-icon>
    <v-toolbar-title class="ml-0 pl-4">
      <span class="hidden-xs-only">Vuetify-Admin-Template</span>
    </v-toolbar-title>
    <v-spacer />

    <v-btn icon>
      <svg-icon name="apps" />
    </v-btn>
    <v-btn icon>
      <svg-icon name="bell" />
    </v-btn>
    <v-menu
      transition="slide-y-transition"
      close-on-content-click
      offset-y
      bottom
    >
      <template v-slot:activator="{ on }">
        <v-btn icon large color="primary" dark v-on="on">
          <v-avatar size="32px" item>
            <v-img :src="$store.getters[`user/userAvatar`]" alt="Vuetify"
          /></v-avatar>
        </v-btn>
      </template>
      <v-list dense>
        <v-list-item @click="logout">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import SvgIcon from "../../svgIcon/SvgIcon";

export default {
  name: "AppBar",
  data: () => ({}),
  methods: {
    navIconClick() {
      this.$store.commit("REVERSE_DRAWER");
    },
    logout() {
      this.$store.dispatch("user/FONT_LOGOUT").then(() => {
        this.$router.replace("/login");
      });
    }
  },
  components: {
    SvgIcon
  }
};
</script>

<style scoped></style>
