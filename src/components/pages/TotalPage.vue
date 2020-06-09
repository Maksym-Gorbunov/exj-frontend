<template>
  <div id="homePage">

    <Header/>

    <div class="box">
      <h2>Total Statistic</h2>
      <div class="content-box">
        

        <table class="table">
          <thead>
            <tr>
              <td>confirmed</td>
              <td>recovered</td>
              <td>critical</td>
              <td>deaths</td>
              <td>last change</td>
              <td>last update</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{total.confirmed}}</td>
              <td>{{total.recovered}}</td>
              <td>{{total.critical}}</td>
              <td>{{total.deaths}}</td>
              <td>{{total.lastChange}}</td>
              <td>{{total.lastUpdate}}</td>
            </tr>  
          </tbody>  
        </table> 



        


        <Diagram1/>

        
          
          
            
      
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Header from "../Header"
import Diagram1 from "../Diagram1"

export default {
  name: "TotalPage",
  components: {Header, Diagram1},
  props: ["myProp"],
  data() {
    return {};
  },

  computed: mapGetters(["total"]),
  methods: {
    ...mapActions([
      "latestTotalsAction"
    ]),

  },
  

  created() {
    this.latestTotalsAction()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 80vw;
  min-height: 100vh;
  margin: auto;
  padding: 0.5em;
}
h2{
  color: bisque;
  text-align: center;
}

table{
  margin: 2em auto;
  text-align: center;
}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
td {
  padding: 0.5em;
}

</style>
