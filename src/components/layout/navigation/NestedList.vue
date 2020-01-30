<template>
  <v-list>
    <div v-for="route in routes" :key="route.path">
      <!-- group绑定当前路由实现List的自动展开 -->
      <!-- 若当前路由对象存在children属性则渲染 <v-list-group>（存在子路由）,否则渲染 <v-list-item> -->
      <v-list-group
        :group="route.path"
        v-if="route.children"
        :class="isRootRoute(route) ? '' : 'ml-5'"
      >
        <template #activator>
          <v-list-item-icon v-if="route.meta.icon">
            <v-icon>{{ route.meta.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ route.meta.title }}</v-list-item-title>
        </template>

        <!-- 递归组件 -->
        <nested-list :propsRoutes="route.children" />
      </v-list-group>

      <!--  :to="{ name: route.name }" 基于命名路由的路由跳转  -->
      <div v-else>
        <v-list-item
          :to="{ name: route.name }"
          :class="isRootRoute(route) ? '' : 'ml-5'"
          :color="activeColor"
        >
          <v-list-item-icon v-if="route.meta.icon">
            <v-icon>{{ route.meta.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ route.meta.title }}</v-list-item-title>
        </v-list-item>
      </div>
    </div>
  </v-list>
</template>

<script>
export default {
  name: "NestedList",
  props: {
    propsRoutes: {
      type: Array,
      required: true,
      default() {
        return [];
      }
    },
    activeColor: {
      type: String,
      default: "success"
    }
  },
  computed: {
    /**
     * @return {array} 剔除不在侧边栏中展示路径对象
     */
    routes() {
      return this.propsRoutes.filter(item => !item.hideInMenu);
    }
  },
  methods: {
    /**
     * @param route 当前路径对象
     * @returns {boolean} 判断当前路径对象是否为路由表的根路由
     */
    isRootRoute(route) {
      return this.$router.options.routes.includes(route);
    }
  }
};
</script>

<style scoped></style>
