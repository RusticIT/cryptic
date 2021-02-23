<template>
  <main class="bg-gray-800">
    <px-header />
    <router-view class="container sm:px-20 py-20 flex justify-center" />
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader";

export default {
  name: "App",
  components: { PxHeader },
  data() {
    return {
      name: "Cryptic - The Rustic Cypto Platform",
      description:
        "A cryptocurrency platform to analyze data from different crypto datasources."
    };
  },
  head: {
    title() {
      return {
        inner: this.name
      };
    },
    // Meta tags
    meta() {
      return [
        {
          name: "application-name",
          content: "Cryptic - The Rustic`s Crypto Platform"
        },
        {
          name: "description",
          content:
            "A cryptocurrency platform to analyze data from different crypto datasources.",
          id: "desc"
        },
        // Twitter
        { name: "twitter:title", content: "Cryptic" },
        // with shorthand
        {
          n: "twitter:description",
          c: "Content description less than 200 characters"
        },
        // ...
        // Google+ / Schema.org
        { itemprop: "name", content: "Content Title" },
        { itemprop: "description", content: "Content Title" },
        // ...
        // Facebook / Open Graph
        { property: "fb:app_id", content: "123456789" },
        { property: "og:title", content: "Content Title" },
        // with shorthand
        { p: "og:image", c: "https://example.com/image.jpg" }
        // ...
      ];
    },
    // link tags
    link() {
      return [
        {
          rel: "canonical",
          href: "http://example.com/#!/contact/",
          id: "canonical"
        },
        { rel: "author", href: "author", undo: false }, // undo property - not to remove the element
        // { rel: 'icon', href: require('./path/to/icon-16.png'), sizes: '16x16', type: 'image/png' },
        // with shorthand
        { r: "icon", h: "path/to/icon-32.png", sz: "32x32", t: "image/png" }
        // ...
      ];
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}
html {
  background-color: #2d3748;
}
</style>
