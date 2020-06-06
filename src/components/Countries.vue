<template>
  <div id="countries">
    <h5>Countries component</h5>
    {{countriesProp}}
    
    <hr>

    {{msg}}
  </div>
</template>

<script>
//import { mapGetters, mapActions } from "vuex";
//import Navbar from "../Navbar";

export default {
  name: "Countries",
  props: ['countriesProp'],
  //components: { Navbar, VideoGroup },
  //computed: mapGetters(["allTodos", "pages", "items", "videos"]),
  data(){
      return {
          msg: [5,5,5]
      }
  },
  
  methods: {
    //...mapActions(["testAction", "signInAction", "test111", "getAllVideos"]),
    test() {
      
    }
  },
  created() {
  }
};
</script>


<style scoped>
</style>
