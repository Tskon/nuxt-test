<template>
  <div>
    <h1>test-page with id (dynamic route)</h1>
    <TestPageMenu />
    <div>{{ testData[id] }}</div>
  </div>
</template>

<script>
import TestPageMenu from '~/components/TestPageMenu'

export default {
  middleware: 'testMiddle',
  components: {
    TestPageMenu,
  },
  data() {
    return {
      id: this.$route.params.id - 1,
      testData: ['First Content', 'Second Content', 'Third Content'],
    }
  },
}
</script>

<style scoped></style>
