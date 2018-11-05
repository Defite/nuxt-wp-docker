<template>
    <div>
        <div class="container">
            <div v-if="error.statusCode === 404">
                <h1>Ooops, page not found</h1>
                <h3>May be you've mistaken in address, please try our beautiful menu in header</h3>
            </div>
            <div v-else>
                <h1>We've encountered a mistake</h1>
                <h3>We're working on it, try again later</h3>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  props: ["error"],
  layout: "default",
};
</script>
