<template>
  <div class="container">
    <strong style="color:green">These missions have launched successfully</strong>
    <div class="row">
      <div v-bind:key="mission.flight_number" v-for="mission in apidata" class="col-sm-3">
        <b-card>
        <b-card-text>{{ mission.mission_name }}</b-card-text>
        </b-card><br>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Launch1",
  props: ["apidata"],
};
</script>
<script>
import axios from "axios";

export default {
  name: "Launch1",
  components: {},
  data() {
    return {
      apidata: [],
    };
  },
  created() {
    axios
      .get(
        "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true"
      )
      .then((response) => (this.apidata = response.data))
      .catch((err) => console.log(err));
  },
};
</script>
<style scoped>
</style>