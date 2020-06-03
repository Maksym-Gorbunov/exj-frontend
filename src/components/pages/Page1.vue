<template>
  <div id="page1">
      <h1>Hello from Page1</h1>
      <hr>
      <Table msg="msg from Page1"></Table>
      <hr>
      <Table :msg=this.message></Table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Table from "../Table";


export default {
  name: "Page1",
  components: {Table},
  computed: mapGetters(["country"]),
  props: ['message'],
  data() {
      return {
          //
      }
  },
  
  methods: {
    ...mapActions(["testAction"]),
    hello() {
      console.log("hello(): TableComponent")
      console.log("hello():" + this.country.name);
    },
    testBtn() {
      console.log("testBtn()")
      //this.testAction();
    },
    getMsg() {
      //this.msg = this.country.name;
      this.message = "777";
    }
  },

  created() {
    this.hello();
    this.getMsg();
  }
};
</script>

<style scoped>

</style>
