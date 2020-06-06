<template>
  <div id="countries">
    <h5>Countries component</h5>
    
    <div v-for="country in countriesProp" :key="country.name">
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
