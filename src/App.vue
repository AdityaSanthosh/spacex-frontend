<template>
  <div id="app">
    <b-jumbotron>
      <h2 class="animatedText contain">SpaceX Flight Records</h2>
      <p class="contain"> Here you can find all the stats of every SpaceX rocket. Click any link to learn More</p>
    </b-jumbotron>
    <div >

    </div>
    <div class="container contain">
    <b-navbar type="dark">
    <b-navbar-nav>
      <div class="row">
      <div class="col-sm-3">
      <b-nav-item>
        <router-link style="color:red" to="/CompleteData">All Flights</router-link>
      </b-nav-item>
      </div>
      <div class="col-sm-3">
      <b-nav-item>
        <router-link style="color:red" to="/LaunchYear">Flights By Year</router-link>
      </b-nav-item>
      </div>
      <div class="col-sm-3">
      <b-nav-item>
        <router-link style="color:red" to="/Launch1" class="mr-5">Successful Launches</router-link>
      </b-nav-item>
      </div>
      <div class="col-sm-3">
      <b-nav-item>
        <router-link style="color:red" to="/Land1" class="ml-3">Successful Landings</router-link>
      </b-nav-item>
      </div>      
      </div>
    </b-navbar-nav>
    </b-navbar>
    </div><br>
    <router-view></router-view>
    </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: "App",
  components: {
  },
};
$(document).ready(function(){
  $('a').click(function(){
    $('a').removeClass("active");
    $(this).addClass("active");
  })
})
</script>
 
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.animatedText {
  animation: fadeandScale .7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-origin: center bottom;
}
.contain {
  font-family: cursive;
}

@keyframes fadeandScale {
  from {
    opacity: 0;
    transform: scale3d(.75,.75,1);
  }
  to {
    opacity: 1;
    transform: scale3d(1,1,1);
  }
}

.active{
  color: red;
  border-bottom: 2px solid red;
}
</style>
