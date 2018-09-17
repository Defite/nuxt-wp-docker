<template>
    <ul class="menu" :class="theme">
        <li class="menu__item" v-for="item in items" :key="item.id">
            <nuxt-link :to="item.path">{{ item.text }}</nuxt-link>
        </li>
    </ul>
</template>

<script>
export default {
  props: {
    items: Array,
    theme: String
  }
};
</script>

<style>
.menu {
  text-align: right;
}

.menu__item {
  display: inline-block;
  margin-left: 30px;
}

.menu__item a {
  color: #000;

  text-decoration: none;

  font-size: 1.1em;
  font-weight: bold;
}

.theme_white .menu__item a {
  color: #fff;
}

.menu__item a:hover {
  color: #5694f1;
}
</style>
