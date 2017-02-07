/*
1|2|3
4|5|6
7|8|9

*/

$(document).ready(function() {
  var hold, place, cMark, x;
  //winning combos
  var win = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 5, 7],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9]
  ];
  var targetBox = {
    1: "#box1",
    2: "#box2",
    3: "#box3",
    4: "#box4",
    5: "#box5",
    6: "#box6",
    7: "#box7",
    8: "#box8",
    9: "#box9"
  };
  //global variable for whose turn it is
  var turn = "comp";
  // variable to hold X or O, possibly redundant. 
  var mark;
  //This is an object to hold the gamestate of the game, it will be updated as clicks are made and AI moves are made.  
  var board = {
    playerIs: "X",
    layout: ["", "", "", "", "", "", "", "", ""],
    turn: turn
  };
  begin();

  //function to choose x or o

  function begin() {
    var x = document.getElementById('game');
    var y = document.getElementById('choose');
    var z = document.getElementById('loser');
    if (x.style.display === 'none') {
      x.style.display = 'flex';
      y.style.display = 'none';
      z.style.display = 'none';
    } else {
      x.style.display = 'none';
      y.style.display = 'flex';
      z.style.display = 'none';
    }
  
  }

  //here is where the AI lives:
  function computerMoves() {
    //these two are arrays of indicies of the human player's controled squares.
    var enemey = [];
    var compy = [];
    hold = board.layout;

    var idx = hold.indexOf(mark);
    while (idx != -1) {
      enemey.push(idx);
      idx = hold.indexOf(mark, idx + 1);
    }
    //now for computer's held squares
    idx = hold.indexOf(cMark);
    while (idx != -1) {
      compy.push(idx);
      idx = hold.indexOf(cMark, idx + 1);
    }
    //now i'll fix the numbers because computers like to count from zero

    enemey = enemey.map(function(num) {
      return num + 1;
    });

    compy = compy.map(function(num) {
      return num + 1;
    });
    enemey.sort();
    compy.sort();

   
    setTimeout(function(){ 
     
    
   
    

    //if there is a win, take it

    for (var i = 0; i < win.length; i++) {

      var one = win[i][0];
      var two = win[i][1];
      var three = win[i][2];
      if (compy.includes(one) && compy.includes(two) && !enemey.includes(three)) {
        x = three;
        $(targetBox[x]).html(cMark);
        x--; //bug fix
        board.layout[x] = cMark;
        setTimeout(function(){ 
    $('#compy').fadeOut();
    $('#playa').fadeOut();
        $("#game").fadeOut();
       
  }, 1000);
        setTimeout(function(){ 
         $("#loser").fadeIn();
        }, 2000);
        return;
      } else if (compy.includes(one) && compy.includes(three) && !enemey.includes(two)) {
        x = two;
        $(targetBox[x]).html(cMark);
        x--; //bug fix
        board.layout[x] = cMark;
        setTimeout(function(){ 
    $('#compy').fadeOut();
    $('#playa').fadeOut();
        $("#game").fadeOut();
       }, 2000);
  
     setTimeout(function(){ 
        
         $("#loser").fadeIn();
          }, 2000);
  
        console.log(board);

        return;
      } else if (compy.includes(two) && compy.includes(three) && !enemey.includes(one)) {
        x = one;
        $(targetBox[x]).html(cMark);
        x--; //bug fix
        board.layout[x] = cMark;
        console.log(board);
 
  setTimeout(function(){ 
    $('#compy').fadeOut();
    $('#playa').fadeOut();
        $("#game").fadeOut();
      
  }, 1000);
        setTimeout(function(){
          $("#loser").fadeIn();
         }, 2000);
        
         return;
      }
     
    }
       //check for a draw
      
      
      if(compy.length === 4){
        setTimeout(function(){ 
           $('#compy').fadeOut();
    $('#playa').fadeOut();
        $("#game").fadeOut();
        }, 1000);   
         setTimeout(function(){ 
    $("#draw").fadeIn();
 
          
         }, 2000);
        
        
        
      }
      
      
    // if the enemey can win, block them.  reuses same logic.
    for (i = 0; i < win.length; i++) {

      one = win[i][0];
      two = win[i][1];
      three = win[i][2];
      if (enemey.includes(one) && enemey.includes(two) && !compy.includes(three)) {
        x = three;
        $(targetBox[x]).html(cMark);
        x--; //bug fix
        board.layout[x] = cMark;

        
 board.turn = "player";
        return;
      } else if (enemey.includes(one) && enemey.includes(three) && !compy.includes(two)) {
        x = two;
        $(targetBox[x]).html(cMark);
        x--; //bug fix
        board.layout[x] = cMark;
       
 board.turn = "player";
        return;
      } else if (enemey.includes(two) && enemey.includes(three) && !compy.includes(one)) {
        x = one;
        $(targetBox[x]).html(cMark);
        x--; //bug fix
        board.layout[x] = cMark;
       
 board.turn = "player";
        return;

      }
    }

    if (board.layout[2] === "") {
      board.layout[2] = cMark;
      $("#box3").html(cMark);
     
      board.turn = "player";

      return;
    } else if (board.layout[6] === "") {
      board.layout[6] = cMark;
      $("#box7").html(cMark);
    
       board.turn = "player";

      return;
    }else if (board.layout[0] === "") {
      board.layout[0] = cMark;
      $("#box1").html(cMark);
      console.log(board);
       board.turn = "player";

      return;}else if (board.layout[8] === "") {
      board.layout[8] = cMark;
      $("#box9").html(cMark);
    
       board.turn = "player";

      return;}
      
 }, 500);
    setTimeout(function(){ 
    $('#compy').slideUp();
    }, 1000);
    
    setTimeout(function(){ 
    $('#playa').slideDown();
    }, 1000);
 
     
    
  }
$('#draw').on('click', function(event) {
  
   board.layout = ["", "", "", "", "", "", "", "", ""];
    $('#box1').html("");
    $('#box2').html("");
    $('#box3').html("");
    $('#box4').html("");
    $('#box5').html("");
    $('#box6').html("");
    $('#box7').html("");
    $('#box8').html("");
    $('#box9').html("");
    $('#draw').fadeOut();
    $("#choose").fadeIn();
     $('#compy').fadeOut();
    $('#playa').fadeOut();

  });
  
  
  
  $('#loser').on('click', function(event) {
    board.layout = ["", "", "", "", "", "", "", "", ""];
    $('#box1').html("");
    $('#box2').html("");
    $('#box3').html("");
    $('#box4').html("");
    $('#box5').html("");
    $('#box6').html("");
    $('#box7').html("");
    $('#box8').html("");
    $('#box9').html("");
    $('#loser').fadeOut();
    $("#choose").fadeIn();
     $('#compy').fadeOut();
    $('#playa').fadeOut();

  });

  $('.x').on('click', function(event) {
    board.playerIs = "X";
    mark = "X";
    cMark = "O";
    begin();
      setTimeout(function(){
      computerMoves();
    }, 500);

  });

  $('.o').on('click', function(event) {
    board.playerIs = "O";
    mark = "O";
    cMark = "X";
    begin();
      setTimeout(function(){
      computerMoves();
    }, 500);

  });
  //NEW GAME BUTTON
  $('#reset').on('click', function(event) {
    $('#box1').html("");
    $('#box2').html("");
    $('#box3').html("");
    $('#box4').html("");
    $('#box5').html("");
    $('#box6').html("");
    $('#box7').html("");
    $('#box8').html("");
    $('#box9').html("");
    board.layout = ["", "", "", "", "", "", "", "", ""];
    begin();
    $('#compy').fadeOut();
    $('#playa').fadeOut();
  });
  // BOXES FOR X'S AND O'S

  $('#box1').on('click', function(event) {
    place = 1;
    hold = board.layout[0];
    console.log(board.layout);
    if (hold != "X" && hold != "O" && board.turn === "player") {
      $("#box1").html(mark);
      board.layout[0] = mark;
      console.log(board);
      board.turn = "comp";
        setTimeout(function(){ 
    $('#playa').slideUp();
    }, 1000);
    
    setTimeout(function(){ 
    $('#compy').slideDown();
    }, 1000);
      setTimeout(function(){ 
   computerMoves();
    }, 1000);
      
    }
  });
  $('#box2').on('click', function(event) {
    place = 2;
    hold = board.layout[1];

    if (hold != "X" && hold != "O" && board.turn === "player") {
      $("#box2").html(mark);
      board.layout[1] = mark;
      console.log(board);
      board.turn = "comp";
       setTimeout(function(){ 
    $('#playa').slideUp();
    }, 1000);
    
    setTimeout(function(){ 
    $('#compy').slideDown();
    }, 1000);
     setTimeout(function(){ 
   computerMoves();
    }, 1000);
    }
  });
  $('#box3').on('click', function(event) {
    place = 3;
    hold = board.layout[2];

    if (hold !== "X" && hold !== "O" && board.turn === "player") {
      $("#box3").html(mark);
      board.layout[2] = mark;
      console.log(board);
      board.turn = "comp";
       setTimeout(function(){ 
    $('#playa').slideUp();
    }, 1000);
    
    setTimeout(function(){ 
    $('#compy').slideDown();
    }, 1000);
      setTimeout(function(){ 
   computerMoves();
    }, 1000);
    }
  });
  $('#box4').on('click', function(event) {
    place = 4;
    hold = board.layout[3];

    if (hold !== "X" && hold !== "O" && board.turn === "player") {
      $("#box4").html(mark);
      board.layout[3] = mark;
      console.log(board);
      board.turn = "comp";
      setTimeout(function(){ 
    $('#playa').slideUp();
    }, 1000);
    
    setTimeout(function(){ 
    $('#compy').slideDown();
    }, 1000);
      setTimeout(function(){ 
   computerMoves();
    }, 1000);
    }
  });
  $('#box5').on('click', function(event) {
    place = 5;
    hold = board.layout[4];

    if (hold != "X" && hold != "O" && board.turn === "player") {
      $("#box5").html(mark);
      board.layout[4] = mark;
      console.log(board);
      board.turn = "comp";
      setTimeout(function(){ 
    $('#playa').slideUp();
    }, 1000);
    
    setTimeout(function(){ 
    $('#compy').slideDown();
    }, 1000);
     setTimeout(function(){ 
   computerMoves();
    }, 1000);
    }
  });
  $('#box6').on('click', function(event) {
    place = 6;
    hold = board.layout[5];
    console.log(hold);
    if (hold != "X" && hold != "O" && board.turn === "player") {
      $("#box6").html(mark);
      board.layout[5] = mark;
      console.log(board);
      board.turn = "comp";
      setTimeout(function(){ 
    $('#playa').slideUp();
    }, 1000);
    
    setTimeout(function(){ 
    $('#compy').slideDown();
    }, 1000);
      setTimeout(function(){ 
   computerMoves();
    }, 1000);
    }
  });
  $('#box7').on('click', function(event) {
    place = 7;
    hold = board.layout[6];

    if (hold !== "X" && hold !== "O" && board.turn === "player") {
      $("#box7").html(mark);
      board.layout[6] = mark;
      console.log(board);
      board.turn = "comp";
      setTimeout(function(){ 
    $('#playa').slideUp();
    }, 1000);
    
    setTimeout(function(){ 
    $('#compy').slideDown();
    }, 1000);
      setTimeout(function(){ 
   computerMoves();
    }, 1000);
    }

  });
  $('#box8').on('click', function(event) {
    place = 8;
    hold = board.layout[7];
    console.log(board);
    if (hold != "X" && hold != "O" && board.turn === "player") {
      $("#box8").html(mark);
      board.layout[7] = mark;
      console.log(board);
      board.turn = "comp";
   setTimeout(function(){ 
    $('#playa').slideUp();
   }, 1000);
    
    setTimeout(function(){ 
    $('#compy').slideDown();
    }, 1000);
     setTimeout(function(){ 
   computerMoves();
    }, 1000);
    }
  });
  $('#box9').on('click', function(event) {
    place = 9;
    hold = board.layout[8];

    if (hold != "X" && hold != "O" && board.turn === "player") {
      $("#box9").html(mark);
      board.layout[8] = mark;
      console.log(board);
      board.turn = "comp";
      setTimeout(function(){ 
    $('#playa').slideUp();
    }, 1000);
    
    setTimeout(function(){ 
    $('#compy').slideDown();
    }, 1000);
      setTimeout(function(){ 
   computerMoves();
    }, 1000);
    }
  });

});
