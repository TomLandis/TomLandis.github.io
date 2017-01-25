/*
User Story: I can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed.

User Story: I can reset the clock for my next pomodoro.
https://www.dropbox.com/s/0veq97susfmc1ku/Alarm.mp3?dl=0
User Story: I can customize the length of each pomodoro.
http://vocaroo.com/i/s0lO2GXjQ94J
https://clyp.it/0gqvemjg
*/
$(document).ready(function() {
  var hold, temp, timer, mins, secs;
 var audio = new Audio('https://www.dropbox.com/s/0veq97susfmc1ku/Alarm.mp3?dl=1');


  function breakDown() {
    if (mins === 0 && secs === 0) {
      clearTimeout(timer);
      clearTimeout(breakDown);
      console.log('aborted');
      $("#resting").addClass("break");
      $('#min').html(25);
      $('#sec').html("00");
       $('#start').html("Start");
      audio.play();
document.body.style.backgroundColor = "#9fc2fc";
    } else if (secs > 0) {
      secs--;
      $('#min').html(mins);
      $('#sec').html(secs);
      timer = setTimeout(breakDown, 1000);
    } else if (mins === 0) {

      console.log("what happened?")
      clearTimeout(timer);
      clearTimeout(breakDown);

      $('#min').html(mins);
      $('#sec').html(secs);
      timer = setTimeout(breakDown, 1000);

    } else {
      secs = 59;
      mins--;

      $('#min').html(mins);
      $('#sec').html(secs);

      timer = setTimeout(breakDown, 1000);
    }
  }

  function countDown() {
    if (mins === 0 && secs === 0) {
      clearTimeout(timer);
      clearTimeout(countDown);

      $('#min').html(mins);
      $('#sec').html(secs);

      $('#resting').removeClass("break");
      hold = $('#bt').html();
      hold = parseFloat(hold);
      mins = hold;
      audio.play();
      document.body.style.backgroundColor = "#fcfa9f";
      
      timer = setTimeout(breakDown, 1000);

    } else if (secs > 0) {
      secs--;
      $('#min').html(mins);
      $('#sec').html(secs);
      timer = setTimeout(countDown, 1000);
    } else if (mins === 0) {
      clearTimeout(timer);
      clearTimeout(countDown);

      console.log("working");
      $('#min').html(mins);
      $('#sec').html(secs);
      timer = setTimeout(countDown, 1000);

    } else {
      secs = 59;
      mins--;

      $('#min').html(mins);
      $('#sec').html(secs);

      timer = setTimeout(countDown, 1000);
    }
  }
  //break timer

  $('#more').on('click', function(event) {

    hold = $('#min').html();
    hold = parseFloat(hold);
    hold += 1;
    $('#min').html(hold);
  });
  $('#less').on('click', function(event) {

    hold = $('#min').html();
    hold = parseFloat(hold);
    if(hold>1){
    hold -= 1;
    $('#min').html(hold);
    }else{
      $('#min').html(hold);
    }
  });

  $('#start').on('click', function(event) {
    var now;
    var temp = $('#start').html();
    mins = $('#min').html();
    secs = $('#sec').html();

    secs = parseFloat(secs);
    mins = parseFloat(mins);

    if (temp === "Start") {
       document.body.style.backgroundColor = "#a6fc9f";
     
      $('#start').html("Stop");
      countDown();

    }
    if (temp === "Stop") {
      document.body.style.backgroundColor = "#9fc2fc";
      $('#start').html("Start");
      clearTimeout(timer);
      clearTimeout(countDown);
      clearTimeout(timer);
      clearTimeout(breakDown);
    }
  });
 $('#breakLonger').on('click', function(event) {

    hold = $('#bt').html();
    hold = parseFloat(hold);
    hold += 1;
    $('#bt').html( hold );
  });
  $('#breakShorter').on('click', function(event) {

    hold = $('#bt').html();
    hold = parseFloat(hold);
    if(hold>1){
    hold -= 1;
    $('#bt').html( hold );
    }else{
    $('#bt').html( hold );}
  });
    $('#reset').on('click', function(event) {
       document.body.style.backgroundColor = "#9fc2fc";
      $('#start').html("Start");
     clearTimeout(timer);
      clearTimeout(countDown);
     
      clearTimeout(breakDown);
    $('#min').html(25);
      $('#sec').html("00");
    
  });
  
});