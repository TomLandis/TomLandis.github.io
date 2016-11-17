$(document).ready(function(){
function convertKelvinToCelsius(kelvin) {
  if (kelvin < (0)) {
    return 'below absolute zero (0 K)';
  } else {
    return (kelvin - 273.15);
  }
}

var city, country, lat, lon, zip, countryCode, temp, description, weatherCode;

$.getJSON("https://http://freegeoip.net/json/", function(data) {
  city = data.city;
  country = data.country_name;
  lat = data.latitude;
  lon = data.longitude;
  zip = data.zip_code;
  countryCode = data.country_code;

  
  $.getJSON(" https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "," + countryCode + "&appid=66b18b2ee6cb8577e268c98efdecf6e5", function(data) {
    temp = convertKelvinToCelsius(data.main.temp);
    temp = Math.round(temp);
    description = data.weather[0].description;
    weatherCode = data.weather[0].id;
    console.log("1");
    console.log(data); 
    console.log(description);
    $("#city").html('The Weather in ' + city + ', ' + country); 
    $("#temp").html(temp + '°');
    $("#conditions").html(description);
    
    //clear or sunny
    if (weatherCode == 800 || 904) {
       $("#weatherPic").html('<img src="http://www.golfsatanca.it/sites/all/modules/weather/images/01d.png" class="img-responsive" alt="not again"></img>');
    }
    
    
    //cloudy
    else if (weatherCode == 801|| 803 || 804|| 802){
      $("#weatherPic").html('<img src="http://www.iconarchive.com/download/i43445/oxygen-icons.org/oxygen/Status-weather-many-clouds.ico" class="img-responsive" alt="not again"></img>');
       }
    //rain or drizzle
    else if (weatherCode == 300 || 301 || 302 || 310 || 311 || 312 || 313 || 314 || 321 || 500 || 501 || 502 || 503 || 504 || 511 || 520 || 521 || 522 || 531 ){
      $("#weatherPic").html('<img src="http://www.iconshock.com/img_vista/WINDOWS8/communications/jpg/rain_icon.jpg"  class="img-responsive" alt="not again"></img>');
    }
    //snow
     else if (weatherCode == 600 || 601 || 602 || 611 || 612 || 615 || 616 || 621 || 622 || 620 || 903 ){
      $("#weatherPic").html('<img src="http://icons.veryicon.com/ico/System/iOS7%20Minimal/Weather%20Snow.ico"  class="img-responsive" alt="not again"></img>');
    }
    //Thunderstorms
    else if (weatherCode == 200 || 201 || 202 || 211 || 212 || 210 || 230 || 221 || 231 || 232 ){
      $("#weatherPic").html('<img src="http://downloadicons.net/sites/default/files/thunderstorm-wear-icons-16099.png"  class="img-responsive" alt="not again"></img>');
    }
     //Mist, smoke, haze, fog
    else if (weatherCode == 701 || 711 || 721 || 741 ){
      $("#weatherPic").html('<img src="http://cdn.iconsmash.com/Content/icons/IconsLandVistaWeatherIconsDemo/iconpreviews/256/Fog.jpg"  class="img-responsive" alt="not again"></img>');
    }
     //sand, dust, volcanic ash
    else if (weatherCode == 731 || 751 || 761 || 762 || 771 || 905 ){
      $("#weatherPic").html('<img src="https://cdn2.iconfinder.com/data/icons/line-weather/130/Sandstorm-128.png"  class="img-responsive" alt="not again"></img>');
    }
    
     //Tornado
    else if (weatherCode == 781 || 900 || 957 || 958 || 959 ){
      $("#weatherPic").html('<img src="https://image.freepik.com/free-icon/tornado_318-104596.jpg"  class="img-responsive" alt="not again"></img>');
    }
     //hurricane
    else if (weatherCode == 901 || 902 || 960 || 961 || 962 ){
      $("#weatherPic").html('<img src="http://sarasota.ifas.ufl.edu/FCS/images/hurricane120.jpg"  class="img-responsive" alt="not again"></img>');
    }
     else{
      $("#weatherPic").html('<img src="https://store-images.s-microsoft.com/image/apps.18422.9007199266244209.e449f78d-4b89-4639-9542-5bfc2d3c9897.ab1437e7-529c-4ff0-a21c-34c405678e67?w=96&h=96&q=60"  class="img-responsive" alt="not again"></img>');
    }
    
    //F and C button
    var cel = true; 
    var tempF = 0;
   $("#switcher").on("click", function(){
     //To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.
     
    if (cel == true) {
    $("#switcher").html("Show in Celsius");
      tempF = Math.round(temp * 1.8 + 32);
       $("#temp").html(tempF + '°' + 'F');
      cel = false;
     // To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9).
    }else{
      $("#switcher").html("Show in Fahrenheit");
      $("#temp").html(temp + '°' + 'C');
      cel = true;
    }
    
   }); 
  });
});
});
