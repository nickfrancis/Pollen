$(document).ready(function(){
  // Anything you want to run once the page has loaded goes here... remove the // from the line below to check the JavaScript is reloading as expected
  // alert('hello world');

  var settings = {
  	"async": true,
  	"crossDomain": true,
  	"url": "https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey",
  	"method": "POST",
  	"headers": {
  		"x-rapidapi-host": "AccuWeatherstefan-skliarovV1.p.rapidapi.com",
  		"x-rapidapi-key": "03cea27b90msh979169fdef0e7f5p1a90cfjsn7cc16810642b",
  		"content-type": "application/x-www-form-urlencoded"
  	},
  	"data": {
  		"apiKey": "A3nqqGOEvaRJUnDv6fAbFVZDBBNTd2DS",
  		"locationKey": "Thame, UK"
  	}
  }

  $.ajax(settings).done(function (response) {
  	console.log(response);
  });
