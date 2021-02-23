<template>
<div>
  <div class="container">
    <h4 class="text-center">All Rocket Launches Till 2020</h4><br>
      <div class="row">
      <div v-bind:key="mission.flight_number" v-for="mission in apidata" class="col-sm-3">
          <b-card>
              <b-card-header>
                {{ mission.mission_name }}
              </b-card-header>
              <div v-if="mission.launch_success==true">
              <b-card-text>{{mission.launch_year}}<br>Launch&nbsp;<div class="checkmark">L</div></b-card-text> 
              </div>
              <div v-if="mission.launch_success==false">
              <b-card-text>{{mission.launch_year}}<br>&nbsp;Launch<div class="wrong">X</div></b-card-text> 
              </div>
              <div v-if="mission.rocket.first_stage.cores[0].land_success === true">
              <b-card-text>Land&nbsp;<div class="checkmark">L</div></b-card-text> 
              </div>
              <div v-if="mission.rocket.first_stage.cores[0].land_success === false">
              <b-card-text>Land&nbsp;<div class="wrong">X</div></b-card-text> 
              </div>                                          
              <b-card-footer><a class="aww" :href="mission.links.video_link" target="_blank">Link</a></b-card-footer>
          </b-card><br>
      </div>
      </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "CompleteData",
  components: {},
  data() {
    return {
      apidata: [],
    };
  },
  created() {
    axios
      .get("https://api.spacexdata.com/v3/launches?limit=100")
      .then((response) => (this.apidata = response.data))
      .catch((err) => console.log(err));
  },
};
</script>
<style>
.checkmark {
  font-family: arial;
  color: green;
  -webkit-transform: scaleX(-1) rotate(-35deg);
  transform: scaleX(-1) rotate(-35deg);
}
.wrong {
  font-family: Arial, Helvetica, sans-serif;
  color: red;
}
.aww a {
  color:green;
}
</style>
