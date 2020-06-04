<template>
  <div id="page1">
      <h1>Hello from Page1</h1>
      <hr>
      <Table msg="msg from Page1"></Table>
      <hr>
      <Table :msg=this.messageProp1></Table>
      <hr>
      <Table :msg=this.m2></Table>
      <hr>
      <Table msg="dddd"></Table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Table from "../Table";


export default {
  name: "Page1",
  components: {Table},
  computed: mapGetters(["country", "countries"]),
  props: ['messageProp1', 'messageProp2', 'countriesProps'],
  data() {
      return {
          m1:888,
          m2:[]
      }
  },
  
  methods: {
    ...mapActions(["testAction", "getAllCountriesAction"]),
    hello() {
      console.log("hello(): TableComponent")
      console.log("hello():" + this.country.name);
    },
    testBtn() {
      console.log("testBtn()")
      //this.testAction();
    },
    getMsg1() {
      //this.msg = this.country.name;
      this.messageProp1 = 888888;
    },
    getMsg2() {
      //this.m2 = 99999;
      this.m2 = this.countries
    },
    getCountries(){
      this.testAction();
      this.getAllCountriesAction();
      
      //this.countriesProps = this.countries
    }
  },

  created() {
    this.hello();
    this.getCountries();
    this.getMsg1();
    this.getMsg2();
  }
};
</script>

<style scoped>

</style>
