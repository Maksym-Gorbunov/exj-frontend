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
    msg: Array
  }
}

</script>


<style scoped>

</style>
