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
}
</script>

<style>
  .camelCase {
    background-color: #090;
  }
</style>
