# spacex-frontend
A Front-end Web Ui for SpaceX API data

This Web UI is built upon Vue.js, vue-router, Vanilla js, Jquery, Bootstrap-Vue, express, axios, popper.js, lodash

The data is fetched from this api https://api.spacexdata.com/v3/launches?limit=100 using Axios library.<br />
<br />
To filter all the Launches by Year, I used Lodash method __.groupby_ <br />
<br />
JQuery, Popper.js, Bootstrap-vue,CSS are used to style the content and add some animations<br />
<br />
vue-router routes the user to different pages based on the link<br />
<br />
The Data filtering Logic and Rendering Logic are written in vue.js<br />
<br />
The Page is hosted from heroku<br />

You can view the Page here https://spacex-frontend.herokuapp.com/

In order to run this page locally

1) Fork this repo to your computer
2) Install the dependencies from package.json with ```npm install``` 
3) Initialise the localhost server using ```npm run serve```
