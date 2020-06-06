<template>
  <div id="countryComponent">
    <div :v-if="this.$store.detailed===false">
      short
    </div>

    <div :v-if="this.$store.detailed===true">
        long

    </div>


  </div>
</template>


<script>
//import { mapGetters, mapActions } from "vuex";
//import Countries from "../Countries";

export default {
  name: "Country",
  //components: {Countries},
  props: ['countryProp'],
  data() {
    return {
      }
  },
  
  //computed: mapGetters(["countries"]),
  methods: {
    //...mapActions(["fetchCountries"]),

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
    width: 70vw;
    margin: 0.5em;
  }
</style>
