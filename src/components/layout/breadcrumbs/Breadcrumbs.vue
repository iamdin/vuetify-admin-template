<template>
  <div class="breadcrumbs">
    <v-breadcrumbs :items="items" large>
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item exact :to="{ name: item.name }">
          {{ item.meta.title }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
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
      this.items = this.$route.matched.filter(item => item.name); //过滤不含有name属性的路由
    },
    permissionCheck(route) {
      // console.log(
      //   this.$store.getters["user/userRole"].some(
      //     role => route.meta.roles && route.meta.roles.includes(role)
      //   )
      // );
      return this.$store.getters["user/userRole"].some(
        role => route.meta.roles && route.meta.roles.includes(role)
      );
    }
  },
  computed: {},
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
