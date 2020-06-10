<template>
  <div id="countryPage">

      <Header/>

      <div class=box>
        <h1>Country</h1>
        
          <div>
            <form @submit="getCountry">
              <label for="date">date:</label><br>
              <input type="text" id="date" name="date" v-model="form.date"><br>
              <label for="code">code:</label><br>
              <input type="text" id="code" name="code" v-model="form.code"><br><br>
              <input type="submit" value="Submit">
            </form> 
          </div>

<br>



        <div class="country">
          
          <ul>
            <li>Country: {{country.country}}</li>
            <li class="location">Location:
              <ul>
                <li>latitude: {{country.latitude}}</li>
                <li>longitude: {{country.longitude}}</li>
              </ul> 
            </li>
            
            <li>Date: {{country.date}}</li>
            <li class="provinces">Provinces: 
              <ul v-for="province in country.provinces" :key="province.province">
                  <div class="province">
                    <li>Province: {{province.province}}</li>
                    <li class="statistic">Statistic:  
                      <ul>
                        <li>confirmed: {{province.confirmed}}</li>
                        <li>recovered: {{province.recovered}}</li>
                        <li>deaths: {{province.deaths}}</li>
                        <li>recovered: {{province.recovered}}</li>
                      </ul> 
                    </li>
                  </div>
              </ul> 

            </li>
          </ul>

        </div>


      </div>

  </div>
</template>





<script>
import { mapGetters, mapActions } from "vuex";
import Header from "../Header"

export default {
  name: "CountryPage",
  components: {Header},
  props: ["myProp"],
  data() {
    return {
      form: {
        date: "2020-04-01",
        code: "Af"
      } 
    };
  },
  computed: mapGetters(["country"]),
  methods: {
    ...mapActions([
      "countryAction"
    ]),
    getCountry(e){
      e.preventDefault()
      this.countryAction(this.form)   
    },
    init(){
      //this.dailyTotalsAction(date)
    }
  },
  created() {
    //this.initTotal()
  }
};
</script>




<style scoped>
  .box{
    width: 80vw;
    margin:auto;
    padding: 0.5em;
  }
  h1{
    text-align: center;
  }
  ul, li {
    list-style-type: none;
  }
  li{
    margin-left: 2em;
  }  
  .location{
    border: 1px solid #ccc;
  }
  .province{
    border: 1px solid #ccc;
  }  
</style>
