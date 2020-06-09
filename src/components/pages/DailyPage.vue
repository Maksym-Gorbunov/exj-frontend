<template>
  <div id="dailyPage">

    <Header/>

    <div class="box">
      <h2>Daily Total Statisti</h2>
      <div class="content-box">
        
        <div class="dailyTotals">

          <div>
            <table class="table">
              <thead>
                <tr>
                  <td>confirmed</td>
                  <td>recovered</td>
                  <td>active</td>
                  <td>deaths</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{dailyTotal.confirmed}}</td>
                  <td>{{dailyTotal.recovered}}</td>
                  <td>{{dailyTotal.deaths}}</td>
                  <td>{{dailyTotal.active}}</td>
                </tr>  
              </tbody>  
            </table> 
          </div>
          
          <div>
            <form @submit="getDailyTotals">
              <label for="date">date:</label><br>
              <input type="text" id="date" name="date" v-model="date">
              <input type="submit" value="Submit">
            </form> 
          </div>

        </div>


        


        <!--Diagram1/-->

        
          
          
            
      
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Header from "../Header"
//import Diagram1 from "../Diagram1"

export default {
  name: "DailyPage",
  components: {Header},
  props: ["myProp"],
  data() {
    return {
      date: "2020-04-01"
    };
  },

  computed: mapGetters(["dailyTotal"]),
  methods: {
    ...mapActions([
      "dailyTotalsAction"
    ]),
    getDailyTotals(e){
      e.preventDefault()
      this.dailyTotalsAction(this.date)   //call action
    },
    init(){
      let date = "2020-04-01"
      this.dailyTotalsAction(date)
      //this.$store.dispatch('dailyTotalAction', date);
    }
  },
  created() {
    this.init()
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
.dailyTotals{
  display: grid;
  grid-template-columns: 60% 40%;
  background: #ccc;
}
.dailyTotals form{
  margin-top: 2em;
}
</style>
