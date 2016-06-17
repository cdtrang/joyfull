(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic.bootstrap(app.AppComponent);
  });
})(window.app || (window.app = {}));

$(document).ready(function() {
    $("#listingLbl") = listingName.text(); 
    
    $("form").submit(function(event) {
        event.preventDefault();
        
        
    });
});

var listing = listingName.text().split(",");
var cityName = listing[0];
var stateAbbr = listing[1];

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://prod-joyfulhomeapi.synapsys.us/location/amenitiesInLocation/" + stateAbbr + cityName, false);
xhr.send();