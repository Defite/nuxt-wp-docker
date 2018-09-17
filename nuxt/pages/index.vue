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

export default {
  async asyncData({ app, store, params }) {
    const wordpressApi = `${
      process.server ? "http://wp:8080" : "http://localhost:5000"
    }/wp-json/wp/v2`;

    if (!store.state.page) {
      let page = await app.$axios.get(`${wordpressApi}/pages?slug=main&_embed`);

      store.commit("setPage", page.data[0]);
    }
  },

  components: {
    Header
  },

  computed: {
    headerImage() {
      return this.$store.state.page._embedded["wp:featuredmedia"][0].source_url;
    }
  }
};
</script>

<style scoped>
.header {
  height: 400px;
}
</style>

