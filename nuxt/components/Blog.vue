<template>
    <div>
        <BlogPost v-for="post in posts" :key="post.id" :post="post"></BlogPost>
    </div>
</template>

<script>
import BlogPost from "~/components/BlogPost.vue";

export default {
  components: {
    BlogPost
  },
  props: {
    posts: Array
  }
};
</script>