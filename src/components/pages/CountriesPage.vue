<template>
  <div id="countriesPage">

      <Header/>

      <div class=box>
        <h1>Countries</h1>
      
      <div class=viewBtns>
        <button @click="shortView()" :disabled="detailed===false" >short</button>
        <button @click="detailedView()" :disabled="detailed===true">detailed</button>
      </div>
      
      <Countries :countriesProp=countries :detailedProp=detailed v-on:deleteCountryEmit="deleteCountry($event)" />

      </div>

  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import Countries from "../Countries";
import Header from "../Header"

export default {
  name: "Page1",
  components: {Countries, Header},
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
      'fetchCountriesDetailed',
      'deleteCountryAction'  
      ]),

    shortView(){
      this.$store.commit('setDetailed', false)
      this.fetchCountries()
    },
    detailedView(){
      this.$store.commit('setDetailed', true)
      this.fetchCountriesDetailed()
    },
    deleteCountry(id){
      console.log(id)
      this.deleteCountryAction(id)

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
