"use strict";

var channelArray = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];

$(document).ready(function () {

  var myClientId = "?client_id=5yuh2gfrszsh8lut40zif7hd8qkyg6w";
  var i = 0;

  channelArray.forEach(function (element) {
    $.ajax({
      url: testUrl + element + myClientId,
      type: "GET",
      async: false,
      dataType: "json",
      success: function success(data, status, jqXHR) {
        console.log(data);

        if (data.bio === null) {
          $('#c' + i).append("<a href='https://www.twitch.tv/" + element + "' target='_blank'><img src='" + data.logo + "' class='thumb'> </a><h3>" + data.name + "</h3> ");
        } else {
          $('#c' + i).append("<a href='https://www.twitch.tv/" + element + "' target='_blank'> <img src='" + data.logo + "' class='thumb'> </a><h4>" + data.name + "</h4> <h5>" + data.bio + "'</h5>");
        }
        i++;
      }
    });
  });
});;

var testUrl = "https://api.twitch.tv/kraken/users/";

//handler for checking if the channel is currently streaming
var streamCheckUrl = " https://api.twitch.tv/kraken/streams/";
var backside = "?client_id=5yuh2gfrszsh8lut40zif7hd8qkyg6w";

var i = 0;
channelArray.forEach(function (element) {

  $.ajax({
    url: streamCheckUrl + element + backside,
    type: "GET",
    async: false,
    dataType: "json",

    success: function success(data, status, jqXHR) {
      if (data.stream === null) {
        $("#c" + i).addClass("offline");
        i++;
      } else {
        $("#c" + i).addClass("online");
        $("#c" + i).append("<h4 id='liveNotice'>Watch Live " + data.stream.game + "</h4>");
        i++;
      }
    },
    error: function error(data, status, jqXHR) {
      $("#c" + i).append("<h4 id='liveNotice'>" + element + "  Closed Account </h4><img class='smallish' src='https://s-media-cache-ak0.pinimg.com/236x/21/24/ff/2124ffebc93d8c6bb2fe8a7a49b40012.jpg'><img>");
      $("#c" + i).addClass("offline");
      i++;
    }
  });
  $("#online").click(function () {
    $(".offline").hide();
    $(".online").show();
  });
  $("#offline").click(function () {
    $(".online").hide();
    $(".offline").show();
  });
  $("#all").click(function () {
    $(".offline").show();
    $(".online").show();
  });
});