<template>
  <div>
    <Header :image="headerImage"/>
    <section class="container">
      <div></div>
    </section>
  </div>
</template>

<script>
import Header from "~/components/Header";
import { getByPath } from '../helpers';

export default {
  async asyncData({ app, store, params }) {
    if (!store.state.page) {
      let page = await app.$axios.get(`/wp-json/wp/v2/pages?slug=main&_embed`);

      store.commit("setPage", page.data[0]);
    }
  },

  components: {
    Header
  },

  computed: {
    headerImage() {
      return getByPath('page._embedded["wp:featuredmedia"][0].source_url', this.$store.state) || '';
    }
  }
};
</script>

<style scoped>
.header {
  height: 400px;
}
</style>

