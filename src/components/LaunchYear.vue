<template>
  <div class="container">
      <h4 class="text-center">Yearly Flight Mission Data</h4><br>
      <div class="row">
      <div v-bind:key="item" v-for="item in apidata" class="col-sm-3">
        <b-card>
        <b-card-title>{{item[0].launch_year}}</b-card-title>
        <div v-bind:key="mission.fight_number" v-for="mission in item">
          <b-card-text>
          {{ mission.mission_name }}
          </b-card-text>
        </div>
        </b-card><br>
      </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import _ from "lodash";
export default {
  name: "LaunchYear",
  data() {
    return {
      apidata: [],
    };
  },
  created() {
    axios
      .get("https://api.spacexdata.com/v3/launches?limit=100")
      .then(
        (response) => (this.apidata = _.groupBy(response.data, "launch_year"))
      )
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
</style>