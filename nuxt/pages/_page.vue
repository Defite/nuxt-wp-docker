/**
* Common page
* @slug: { slug }
*/
<template>
  <div>
    <section class="container">
      <h1 v-html="title"></h1>
    </section>
  </div>
</template>

<script>
import { getByPath } from '../helpers';

export default {
  async asyncData({ app, store, params, res, error }) {
    return app.$axios.get(`/wp-json/wp/v2/pages?slug=${params.page}&_embed`)
            .then((page) => {
              if (!page.data.length) {
                error({ statusCode: 404, message: 'Page not found' })
              } else {
                store.commit("setPage", page.data[0])
              }
            });
  },

  computed: {
    title() {
      return getByPath('global.page.title.rendered', this.$store.state) || '';
    }
  }
};
</script>
