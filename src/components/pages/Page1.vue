<template>
  <div id="page1Component">
      <h1>Hello from Page1    </h1>
      <button @click="fetchCountries">btn1</button>
      <button @click=btn2()>btn2</button>
      <button @click=init()>init</button>
      <Countries />
      <!--Countries :countriesProp=countries /-->


      <hr>

  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import Countries from "../Countries";

export default {
  name: "Page1",
  components: {Countries},
  props: ['prop1'],
  data() {
    return {
      countriesData:[1,2,3]
      }
  },
  
  computed: mapGetters(["countries"]),
  methods: {
    ...mapActions(["fetchCountries"]),

    btn1() {
      console.log('btn1')
      this.fetchCountries()
      this.init()
    },
    btn2() {
      console.log('btn2')
      this.countriesData = [1,1,1]
    },
    init(){
      console.log('init')
      this.countriesData = this.countries
      //this.prop1 = this.countries
    }
  },

  created() {
    this.init()
  }
};
</script>

<style scoped>

</style>
