<template>
  <v-list>
    <div v-for="route in routes" :key="route.path">
      <!-- group绑定当前路由实现List的自动展开 -->
      <!-- 若当前路由对象存在children属性则渲染 <v-list-group>（存在子路由）,否则渲染 <v-list-item> -->
      <v-list-group
        :group="route.path"
        v-if="hasRouteChildren(route)"
        :class="isLevelOneRoute(route) ? '' : 'ml-5'"
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
          :to="routeNameTo(route)"
          :class="isLevelOneRoute(route) ? '' : 'ml-5'"
          :color="activeColor"
        >
          <v-list-item-icon v-if="listItemConfig(route, 'icon')">
            <v-icon>{{ listItemConfig(route, "icon") }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title v-if="listItemConfig(route, 'title')">
            {{ listItemConfig(route, "title") }}</v-list-item-title
          >
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
     * 剔除不在侧边栏中展示路径对象
     * @return {array}
     */
    routes() {
      return this.propsRoutes.filter(item => !item.hideInMenu);
    }
  },
  methods: {
    /**
     * 判断当前路径对象是否为路由表的一级路由
     * @param route 当前路径对象
     * @returns {boolean}
     */
    isLevelOneRoute(route) {
      return this.$router.options.routes.includes(route);
    },
    /**
     * 判断当前路径对象是否被渲染为 list-group
     * @param route
     * @returns {boolean|boolean}
     */
    hasRouteChildren(route) {
      return route.hasOwnProperty("children") && route.children.length > 1;
    },
    /**
     * 根据当前路径对象是否含有children属性，来配置 list-item 的文本及图标
     * @param route
     * @param property
     * @returns {string}
     */
    listItemConfig(route, property) {
      return route.hasOwnProperty("children")
        ? route.children[0]["meta"][property]
        : route.meta[property];
    },
    /**
     * list-item 基于命名路由的路由跳转
     * @param route
     * @returns {{name: (*)}} 含有name属性的路径对象
     */
    routeNameTo(route) {
      return {
        name: route.hasOwnProperty("children")
          ? route.children[0].name
          : route.name
      };
    }
  }
};
</script>

<style scoped></style>
