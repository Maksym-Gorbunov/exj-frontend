<template>
  <div id="countryComponent">
    
    <div class="content">
      
      <div v-if="detailedProp===false" class="short">
        <p>{{this.toUpper(countryProp.name)}}</p>
      </div>

      <div v-else class=detailed>
      
        <div>
          <p>{{this.toUpper(countryProp.name)}}</p>
          <p>code: {{countryProp.code}}</p>
          <p>location: {{countryProp.location}}</p>
          <p>statistic: {{countryProp.statistic}}</p>
        </div>
    
        <div class="btns">
          <button>edit</button>
          <button v-on:click="deleteCountryEmit">delete</button>
          <button>save</button>
        </div>
      
      </div>
    
    </div>

    


  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
//import Countries from "../Countries";

export default {
  name: "Country",
  //components: {Countries},
  props: ['countryProp', 'detailedProp'],
  data() {
    return {
      }
  },
  
  //computed: mapGetters(["detailed"]),
  methods: {
    //...mapActions(["fetchCountries"]),
    toUpper(str){
      return str.toUpperCase()  
    },
    deleteCountryEmit(){
      this.$parent.$emit('deleteCountryEmit', this.countryProp.id)
    }
  },

  created() {
  }
};
</script>

<style scoped>
  #countryComponent{
    background: rgb(222, 210, 255);
    border:1px solid #ccc;
    border-radius: 5px;
    width: 80vw;
    margin: 0.5em;
  }
  .content{
    padding: 0.5em;
  }
  .detailed{
    display: grid;
    grid-template-columns: 80% 20%;
  }
  .short{
  }
  .btns{
    background: #ccc;
    padding: 0.5em;
  }
  button{
    width: 100%;
    margin: 0.5em auto 0.5em auto;
  }
</style>
