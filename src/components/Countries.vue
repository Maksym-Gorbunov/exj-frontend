<template>
  <div id="countries">
    <h5>Countries component</h5>
    <p>countriesProp: {{countriesProp}}</p>
    <p>msg: {{msg}}</p>
    <hr/>
    
    <div v-for="country in countries" :key="country.name">
        <Country v-bind:countryProp="country" /> 
    </div> 

    
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Country from "./Country";

export default {
  name: "Countries",
  props: ['countriesProp'],
  components: { Country },
    computed: mapGetters(["countries"]),
  data(){
      return {
          msg: [5,5,5]
      }
  },
  
  methods: {
    ...mapActions([]),
    test() {
      
    }
  },
  created() {
  }
};
</script>


<style scoped>
</style>
