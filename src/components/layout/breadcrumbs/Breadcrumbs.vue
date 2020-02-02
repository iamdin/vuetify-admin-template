<template>
  <div class="breadcrumbs">
    <v-breadcrumbs :items="items" large></v-breadcrumbs>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs",
  data: () => ({
    items: []
  }),
  methods: {
    breadcrumbsGenerate() {
      this.items = this.$route.matched
        .filter(item => item.name) //过滤不含有name属性的路由
        .map(item => {
          return {
            text: item.meta.title,
            exact: true,
            to: { name: item.name }
          };
        });
    }
  },
  watch: {
    "$route.path": {
      immediate: true,
      handler() {
        this.breadcrumbsGenerate();
      }
    }
  },
  created() {
    this.breadcrumbsGenerate();
  }
};
</script>

<style scoped></style>
