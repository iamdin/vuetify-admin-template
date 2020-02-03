<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    :width="width"
    :height="height"
  >
    <path :d="d" :fill="fill"></path>
  </svg>
</template>

<script>
import svg from "./svg";
export default {
  name: "SvgIcon",
  props: {
    width: {
      type: String,
      default: "24px"
    },
    height: {
      type: String,
      default: "24px"
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    d() {
      return svg[this.name].d;
    },
    fill() {
      return svg[this.name].fill;
    }
  }
};
</script>

<style scoped></style>
