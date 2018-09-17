<template>
    <div v-if="post">
      <article v-if="isSingle" class="post">
          <h1 class="post__title" v-html="post.title.rendered" />
          <div class="post__content" v-html="post.content.rendered" />
      </article>

      <article v-else class="post">
          <h1 class="post__title">
            <nuxt-link :to="`blog/${post.slug}`">{{ post.title.rendered }}</nuxt-link>
          </h1>
          <div class="post__excerpt" v-html="post.excerpt.rendered"></div>
      </article>
    </div>
    
</template>

<script>
export default {
  props: {
    post: Object,
    isSingle: Boolean
  }
};
</script>

<style>
.post {
  margin-bottom: 40px;
}

.post__title {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.post__title a {
  text-decoration: none;
}

.post__excerpt {
  font-size: 1rem;
  line-height: 1.5rem;
}
</style>