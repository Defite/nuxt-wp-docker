<template>
    <div>
        <Header />
        <section class="container">
            <BlogPost isSingle :post="post" />

        </section>
    </div>
</template>

<script>
import Header from "~/components/Header";
import BlogPost from "~/components/BlogPost";

export default {
  async asyncData({ app, store, params }) {
    let post = await app.$axios.get(
      `/wp-json/wp/v2/posts?slug=${params.post}&_embed`
    );

    store.commit("setPost", post.data[0]);
  },

  components: {
    Header,
    BlogPost
  },

  computed: {
    post() {
      return this.$store.state.post;
    }
  }
};
</script>

<style>
.post p {
  margin-bottom: 1rem;
}

.wp-block-image {
  text-align: center;
}

.wp-block-image figcaption {
  font-size: 0.85rem;
  color: #aaa;
}
</style>