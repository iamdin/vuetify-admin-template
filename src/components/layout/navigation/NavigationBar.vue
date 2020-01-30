<template>
  <v-navigation-drawer
    v-model="$store.state.navigationDrawer"
    app
    mobile-break-point="600"
    :expand-on-hover="$vuetify.breakpoint.smOnly"
  >
    <nested-list :propsRoutes="$router.options.routes" />
  </v-navigation-drawer>
</template>

<script>
import NestedList from "./NestedList";

export default {
  name: "NavigationBar",
  components: { NestedList },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
