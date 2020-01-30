<template>
  <v-app id="inspire">
    <!-- 顶部导航栏-->
    <app-bar />
    <!-- 侧边导航栏 -->
    <navigation-bar />
    <!--  内容区  -->
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavigationBar from "./components/layout/NavigationBar";
import AppBar from "./components/layout/AppBar";

export default {
  name: "App",
  data: () => ({}),
  components: { NavigationBar, AppBar }
};
</script>
