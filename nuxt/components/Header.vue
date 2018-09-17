<template>
    <header v-if="image" class="header" :style="{ backgroundImage: `url('${image}')` }">
        <Menu theme="theme_white" v-bind:items="routes"/>
    </header>

    <header v-else class="header">
        <Menu v-bind:items="routes"/>
    </header>
</template>

<script>
import Menu from "~/components/Menu.vue";

export default {
  components: {
    Menu
  },
  props: {
    image: String
  },
  data: function() {
    return {
      routes: [
        {
          id: "1",
          path: "/",
          text: "Home"
        },
        {
          id: "2",
          path: "/blog",
          text: "Blog"
        }
      ]
    };
  }
};
</script>

<style>
.header {
  background-position: 50% 50%;
  background-size: cover;
  padding: 20px 60px;
}
</style>
