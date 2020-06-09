<template>
  <div id="dailyPage">

    <Header/>

    <div class="box">
      <h2>Daily Total Statistic</h2>
      <div class="content-box">
        
        <div class="dailyByDate">
          <div>
            <table class="table">
              <thead>
                <tr>
                  <td>confirmed</td>
                  <td>recovered</td>
                  <td>deaths</td>
                  <td>active</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{dailyByDate.confirmed}}</td>
                  <td>{{dailyByDate.recovered}}</td>
                  <td>{{dailyByDate.deaths}}</td>
                  <td>{{dailyByDate.active}}</td>
                </tr>  
              </tbody>  
            </table> 
          </div>
          <div>
            <form @submit="getDailyByDate">
              <label for="date">date:</label><br>
              <input type="text" id="date" name="date1" v-model="date">
              <input type="submit" value="Submit">
            </form> 
          </div>
        </div>


        <div class="dailyByName">
          <div>
            <table class="table">
              <thead>
                <tr>
                  <td>confirmed</td>
                  <td>recovered</td>
                  <td>deaths</td>
                  <td>active</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{dailyByName.confirmed}}</td>
                  <td>{{dailyByName.recovered}}</td>
                  <td>{{dailyByName.deaths}}</td>
                  <td>{{dailyByName.active}}</td>
                </tr>  
              </tbody>  
            </table> 
          </div>
          <div>
            <form @submit="getDailyByName">
              <label for="name">country:</label><br>
              <input type="text" id="name" name="name" v-model="name">
              <input type="submit" value="Submit">
            </form> 
          </div>
        </div>

        <div class="dailyByCode">
          <div>
            <table class="table">
              <thead>
                <tr>
                  <td>confirmed</td>
                  <td>recovered</td>
                  <td>deaths</td>
                  <td>active</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{dailyByCode.confirmed}}</td>
                  <td>{{dailyByCode.recovered}}</td>
                  <td>{{dailyByCode.deaths}}</td>
                  <td>{{dailyByCode.active}}</td>
                </tr>  
              </tbody>  
            </table> 
          </div>
          <div>
            <form @submit="getDailyByCode">
              <label for="code">code:</label><br>
              <input type="text" id="code" name="code" v-model="code">
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
      date: "2020-04-01",
      name: "USA",
      code: "Af" 
    };
  },

  computed: mapGetters(["dailyByDate", "dailyByName", "dailyByCode"]),
  methods: {
    ...mapActions([
      "dailyByDateAction",
      "dailyByNameAction",
      "dailyByCodeAction"
    ]),
    getDailyByDate(e){
      e.preventDefault()
      this.dailyByDateAction(this.date)   
    },
    getDailyByName(e){
      e.preventDefault()
      this.dailyByNameAction(this.name)   
    },
    getDailyByCode(e){
      e.preventDefault()
      this.dailyByCodeAction(this.code)   
    },
    

    initTotal(){
      //this.dailyTotalsAction(date)
    },
    initByDateAndName(){
      //this.dailyCountryByDateAndNameAction(this.form2)
    }
  },
  created() {
    //this.initTotal()
    //this.initByDateAndName()
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
.dailyByDate{
  display: grid;
  grid-template-columns: 60% 40%;
  background: #ccc;
  margin-bottom: 1em;
}
.dailyByDate form{
  margin-top: 2em;
}
.dailyByName{
  display: grid;
  grid-template-columns: 60% 40%;
  background: #ccc;
  margin-bottom: 1em;
}
.dailyByName form{
  margin-top: 1.5em;
}
.dailyByCode{
  display: grid;
  grid-template-columns: 60% 40%;
  background: #ccc;
  margin-bottom: 1em;
}
.dailyByCode form{
  margin-top: 1.5em;
}
</style>
