<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on" @click.native="screenFull">
        <v-icon color="white">mdi-fullscreen</v-icon>
      </v-btn>
    </template>
    <span>{{ content }}</span>
  </v-tooltip>
</template>

<script>
import screenfull from "screenfull";
export default {
  name: "index",
  data() {
    return {
      isScreenFull: false,
      screenfull: screenfull
    };
  },
  computed: {
    content() {
      return this.isScreenFull ? "取消全屏" : "全屏";
    }
  },
  methods: {
    screenFull() {
      this.isScreenFull = !this.isScreenFull;
      if (!this.screenfull.enabled) {
        // 如果不允许进入全屏，发出不允许提示
        return false;
      }
      this.screenfull.toggle();
    }
  },
  mounted() {
    this.screenfull.onchange(() => {
      this.isScreenFull = this.screenfull.isFullscreen;
    });
  }
};
</script>

<style scoped></style>
