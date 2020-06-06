<template>
  <div id="page1">
      <h1>Hello from Page1    </h1>
      <i class="fas fa-adjust fa-2x"></i>
      <!--
        <i class="fas fa-camera fa-xs"></i>
        <i class="fas fa-camera fa-xs"></i>
        <i class="fas fa-camera fa-sm"></i>
        <i class="fas fa-camera fa-lg"></i>
        <i class="fas fa-camera fa-2x"></i>
      -->
      <hr>
      <!--Table msg="msg from Page1"></Table>
      <hr>
      <Table :msg=this.messageProp1></Table>
      <hr-->
      <Table msg="ddd"></Table>
      <hr>
      <button @click="testBtn">click</button>
      <button @click="testBtn2">reset</button>
      <hr>
      {{this.countries}}
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import Table from "../Table";

export default {
  name: "Page1",
  components: {Table},
  computed: mapGetters(["country", "countries"]),
  props: ['messageProp1'],
  data() {
      return {
          m1:888,
          m2:[333]
      }
  },
  
  methods: {
    ...mapActions(["testAction", "getAllCountriesAction"]),

    hello() {
      console.log("hello():" + this.country.name);
    },
    testBtn() {
      this.getAllCountriesAction();
      console.log(this.countries)
      this.m2 = this.countries
    },
    testBtn2() {
      this.countries = null
    },
    getCountries(){
      this.getAllCountriesAction();
    },
    setCountries(){
      this.m2 = this.countries
    }
  },

  created() {
    
  }
};
</script>

<style scoped>

</style>
