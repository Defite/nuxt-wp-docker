<template>
    <div>
        <Header />

        <div class="featured-image" :style="{ backgroundImage: `url('${getFeaturedImage}')` }">
        </div>

        <section class="container">
            <Blog :posts="posts"/>            
        </section>
    </div>
</template>

<script>
import Blog from "~/components/Blog.vue";
import Header from "~/components/Header.vue";

export default {
  async asyncData({ app, store, params }) {
    if (!store.state.posts.length) {
      let posts = await app.$axios.get(
        `/wp-json/wp/v2/posts?orderby=date&per_page=7&_embed`
      );

      store.commit("setPosts", posts.data);
    }

    if (!store.state.blog) {
      let blog = await app.$axios.get(`${wordpressApi}/pages?slug=blog&_embed`);

      store.commit("setBlogPage", blog.data[0]);
    }
  },
  components: {
    Blog,
    Header
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    getFeaturedImage() {
      return this.$store.state.blog._embedded["wp:featuredmedia"][0].source_url;
    }
  }
};
</script>

<style scoped>
.header {
  height: 65px;
}

.featured-image {
  height: 200px;
  background-position: 50% 50%;
  background-size: cover;
  margin-bottom: 40px;
}

.container {
  width: 960px;
  margin: 0 auto;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>