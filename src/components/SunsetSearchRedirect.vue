<template>
  <div class="search-redirect">
    Em alternativa, repita a pesquisa na web:
    <a href="https://duckduckgo.com/?q=site%3Asigarra.up.pt {{query}}" target="blank_">{{query}}</a>
  </div>
</template>

<script>
export default {
  name: 'SunsetSearchRedirect',
  props: [
    'query'
  ],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
  .search-redirect {
    padding: 0.6em 1em 0.2em 1em;
    color: #888888;
  }
</style>