<template>
  <div class="container">
      <strong style="color:green">These missions have landed successfully</strong>
      <div class="row">
      <div v-bind:key="mission.flight_number" v-for="mission in apidata" class="col-sm-3">
        <div v-if="mission.rocket.first_stage.cores[0].land_success === true">
          <b-card>
              <b-card-sub-title>{{ mission.launch_year }}</b-card-sub-title>
              <b-card-text>{{ mission.mission_name }}</b-card-text>
          </b-card><br>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Land1",
  props: ["apidata"],
};
</script>
<script>
import axios from "axios";

export default {
  name: "Land1",
  components: {},
  data() {
    return {
      apidata: [],
    };
  },
  created() {
    axios
      .get("https://api.spacexdata.com/v3/launches?limit=100&land_success=true")
      .then((response) => (this.apidata = response.data))
      .catch((err) => console.log(err));
  },
};
</script>
<style scoped>
</style>