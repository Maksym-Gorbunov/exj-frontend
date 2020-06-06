<template>
  <div id="page1Component">
      <h1>Hello from Page1    </h1>
      
      <hr>
      <button @click="shortView()" :disabled="detailed===false" >short</button>
      <button @click="detailedView()" :disabled="detailed===true">detailed</button>

      <hr>
      <p>detailed: {{this.detailed}}</p>
      <hr>

      <!--Countries /-->
      <Countries :countriesProp=countries />


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
  
  computed: mapGetters(['countries', 'detailed']),
  methods: {
    ...mapActions(
      ['fetchCountries', 
      'fetchCountriesDetailed']),

    shortView(){
      this.fetchCountries()
      this.$store.commit('setDetailed', false)
    },
    detailedView(){
      this.fetchCountriesDetailed()
      this.$store.commit('setDetailed', true)
    },
    init(){
      if(this.detailed){
        this.fetchCountriesDetailed()
      } else{
        this.fetchCountries()
      }
    }
  },

  created() {
    this.init()
  }
};
</script>

<style scoped>
  .active{
    background:  rgb(107, 223, 126);
    
  }
</style>
