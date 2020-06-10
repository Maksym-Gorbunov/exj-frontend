<template>
  <div id="header">
    <div class="left"><a href="/">logo</a></div>
    <div class="center">
        <a href="/">HOME</a>
        <a href="/#/api">API</a>
        <a href="/#/countries">COUNTRIES</a>
        <a href="/#/total">TOTAL</a>
        <a href="/#/daily">DAILY</a>
        <a href="/#/country">COUNTRY</a>
    </div>
    <div class="right">right</div>
  </div>
</template>


<script>
//import { mapGetters, mapActions } from "vuex";
//import Countries from "../Countries";

export default {
  name: "Header",
  //components: {Countries},
  props: ['userProp'],
  data() {
    return {
      }
  },
  
  //computed: mapGetters(["detailed"]),
  methods: {
    
  },

  created() {
  }
};
</script>

<style scoped>
  #header{
    background: rgb(158, 240, 243);
    border:1px solid #ccc;
    border-radius: 5px;
    width: 100vw;
    height: 2em;
    display: grid;
    grid-template-columns: 10% 70% 20% ;
  }
  a{
      text-decoration: none;
      margin: 0 1em;
      line-height: 2em;
      color: rgb(111, 100, 121);
  }
  .left{

  }
  .center{
    text-align: center;
  }
  .right{

  }

</style>
