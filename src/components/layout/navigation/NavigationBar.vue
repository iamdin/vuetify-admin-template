<template>
  <v-navigation-drawer
    v-model="$store.state.navigationDrawer"
    app
    mobile-break-point="600"
    :expand-on-hover="$vuetify.breakpoint.smOnly"
  >
    <nested-list :propsRoutes="$store.getters['permission/routes']" />
  </v-navigation-drawer>
</template>

<script>
import NestedList from "./NestedList";

export default {
  name: "NavigationBar",
  components: { NestedList }
};
</script>

<style scoped></style>
