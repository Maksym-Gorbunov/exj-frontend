<template>
  <div id="countryComponent">
      {{countryProp.name}}
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
//import Countries from "../Countries";

export default {
  name: "Country",
  //components: {Countries},
  props: ['countryProp'],
  data() {
    return {
      }
  },
  
  computed: mapGetters(["countries"]),
  methods: {
    ...mapActions(["fetchCountries"]),

  },

  created() {
  }
};
</script>

<style scoped>

</style>
