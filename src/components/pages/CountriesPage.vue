<template>
  <div id="countriesPageComponent">

      <div class=box>
        <h1>Countries</h1>
      
      <div class=viewBtns>
        <button @click="shortView()" :disabled="detailed===false" >short</button>
        <button @click="detailedView()" :disabled="detailed===true">detailed</button>
      </div>
      
      <Countries :countriesProp=countries :detailedProp=detailed />

      </div>

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
      this.$store.commit('setDetailed', false)
      this.fetchCountries()
    },
    detailedView(){
      this.$store.commit('setDetailed', true)
      this.fetchCountriesDetailed()
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
  .box{
    width: 80vw;
    margin:auto;
    padding: 0.5em;
  }
  h1{
    text-align: center;
  }
  .viewBtns{
    display: inline;
    margin-left: 0.5em;
  }
  .viewBtns > button {
    background: #ccc;
    width: 10%;
    height: 2em;
    margin-right: 0.3em;
  }
  .active{
    background:  rgb(107, 223, 126);
  }
  
</style>
