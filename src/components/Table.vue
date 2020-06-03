<template>
  <div class="tableComponent">
    <h3>TableComponent</h3>
    <p>{{ msg }}</p>
  </div>
</template>


<script>
export default {
  name: 'Table',
  props: {
    msg: String
  }
}

</script>


<style scoped>

</style>
