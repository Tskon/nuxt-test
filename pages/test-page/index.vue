<template>
  <div>
    <h1 class="camelCase">
      test-page
    </h1>
    <TestPageMenu />
  </div>
</template>

<script>
import TestPageMenu from '~/components/TestPageMenu'

export default {
  components: {
    TestPageMenu,
  },
  mounted() {
    this.$testAxios()
  },
}
</script>

<style>
  .camelCase {
    background-color: #090;
  }
</style>
