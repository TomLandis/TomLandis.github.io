$(document).ready(function() {
  //sounds
  var a1 = new Audio(src = '  https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
  var a2 = new Audio(src = 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
  var a3 = new Audio(src = '  https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
  var a4 = new Audio(src = '  https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

  //this varible will disable player input except when allowed
  var turn = "off";
  var holder, x, i, o, off;
  var strict = "no";
  var seq = [];
  var mySeq = [];
  var round = 0;
  var w = true;

  var colors = {
    6: "green",
    7: "grey",
    8: "brown",
    9: "blue"
  };
  // this function randomly picks a color
  function genRand() {
    var num = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
    num = colors[num];
    seq[x] = num;
    return num;
  }

  function player() {

    $('#green').removeClass("handsOff");
    $('#grey').removeClass("handsOff");
    $('#brown').removeClass("handsOff");
    $('#blue').removeClass("handsOff");

    o = 0;
    turn = "player";

  }

  function simon() {
    $('#green').addClass("handsOff");
    $('#grey').addClass("handsOff");
    $('#brown').addClass("handsOff");
    $('#blue').addClass("handsOff");

    if (i === 0 && off > 0 && w) {
      holder = genRand();
      seq.push(holder);

    }

    // the recursive simon
    else if (i === seq.length) {

      w = true;
      mySeq = [];
      player();
    }

    if (seq[i] === "green" && off > 0) {
      setTimeout(function() {
        $('#green').click();
      }, 700);

      i++;
      setTimeout(function() {
        simon();
      }, 2000);
    } else if (seq[i] === "grey" && off > 0) {
      setTimeout(function() {
        $('#grey').click();
      }, 700);

      i++;
      setTimeout(function() {
        simon();
      }, 2000);
    } else if (seq[i] === "brown" && off > 0) {
      setTimeout(function() {
        $('#brown').click();
      }, 700);

      i++;
      setTimeout(function() {
        simon();
      }, 2000);
    } else if (seq[i] === "blue" && off > 0) {
      setTimeout(function() {
        $('#blue').click();
      }, 700);

      i++;
      setTimeout(function() {
        simon();
      }, 2000);
    } else {

    }

  }

  function wrong() {
    if (strict === "yes") {
      $('#all').css("background-color", "red");
      a1.play();
      a2.play();
      a3.play();
      a4.play();
      setTimeout(function() {
        round = 0;
        $('#count').html(0);
        $('#onOff').click();
        $('#all').css("background-color", "white");
      }, 500);

    } else {
      $('#all').css("background-color", "red");
      a1.play();
      a2.play();
      a3.play();
      a4.play();
      setTimeout(function() {
        $('#all').css("background-color", "white");
      }, 500);

      mySeq = [];
      w = false;
      i = 0;
      simon();
    }
  }

  function victory() {
    $('#winner').slideDown();
    setTimeout(function() {
      $('#winner').slideUp();
    }, 5000);
    $('#onOff').click();

  }

  function checker() {
    if (mySeq.length > 18 && seq[o] === mySeq[o]) {
      victory();
    } else if (seq[o] === mySeq[o] && seq.length === mySeq.length) {
      round++;
      $('#count').html(round);
      i = 0;
      setTimeout(function() {
        simon();
      }, 2000);

    } else if (seq[o] === mySeq[o]) {
      o++;

    } else {
      wrong();

    }

  }

  // on of button

  $('#onOff').on('click', function(event) {
    if ($('#off').css("color") === "rgb(255, 0, 0)") {
      $('#on').css('color', 'red');
      $('#off').css('color', 'black');
      off = 1;
      i = 0;
      seq = [];
      simon();

    } else {
      $('#on').css('color', 'black');
      $('#off').css('color', 'red');
      off = 0;
      //some way of stopping simon function should go here
    }

  });
  $('#strict').on('click', function(event) {

    if ($('#strict').css("color") === "rgb(0, 0, 0)") {
      $('#strict').css('color', 'red');
      strict = "yes";

    } else {
      $('#strict').css('color', 'black');
      strict = "no";
    }

  });

  $('#green').on('click', function(event) {
    a1.play();
    $('#green').css('opacity', '.7');
    setTimeout(function() {
      $('#green').css('opacity', '1');
    }, 700);

  });
  $('#grey').on('click', function(event) {
    a2.play();
    $('#grey').css('opacity', '.7');
    setTimeout(function() {
      $('#grey').css('opacity', '1');
    }, 700);

  });
  $('#brown').on('click', function(event) {
    a3.play();
    $('#brown').css('opacity', '.7');
    setTimeout(function() {
      $('#brown').css('opacity', '1');
    }, 700);

  });
  $('#blue').on('click', function(event) {
    a4.play();
    $('#blue').css('opacity', '.7');
    setTimeout(function() {
      $('#blue').css('opacity', '1');
    }, 700);

  });

  $("#green").mousedown(function() {
    mySeq.push("green");
    checker();
  });
  $("#grey").mousedown(function() {
    mySeq.push("grey");
    checker();
  });
  $("#brown").mousedown(function() {
    mySeq.push("brown");
    checker();
  });
  $("#blue").mousedown(function() {
    mySeq.push("blue");
    checker();
  });

});