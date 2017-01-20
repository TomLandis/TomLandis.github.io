 $(document).ready(function() {
   var hold, zilch;
   var op = 0,
     pre = 0,
     post, answer = 0;

   // mult function
   function mult(a, b) {
     return a * b;
   }

   // div function
   function divide(a, b) {
     return a / b;
   }
   // sub function
   function sub(a, b) {
     return a - b;
   }
   // add function
   function add(a, b) {
     return a + b;
   }
   // console.log (sub(800,90));

   //oops button aka: clear function
   $('#clear').on('click', function(event) {
     $("#me").html("0");
     op = 0;
     pre = 0;

   });
   //7
   $('#seven').on('click', function(event) {

     var zilch = $("#me").html();
//console.log(zilch);
     if (zilch == "0" && !zilch.includes(".")) {
       $("#me").html("7");
     } else if (op === "x" ||op === "+" ||op=== "-" ||op=== "÷" ) {
       console.log("there");
        $("#me").html("7");
     } else {
console.log("here");
       var hold = $("#me").text();

       hold = hold + "7";
       $("h3").html(hold);
     }
     event.preventDefault();
     var jim = seven.value;

   });
   //8
   $('#eight').on('click', function(event) {

     var zilch = $("#me").html();

     if (zilch == "0" && !zilch.includes(".")) {
       $("#me").html("8");
     }
     else if (op === "x" ||op === "+" ||op=== "-" ||op=== "÷" ) {
        $("#me").html("8");
     }
     else {

       var hold = $("#me").text();

       hold = hold + 8;
       $("h3").html(hold);
     }
     event.preventDefault();

   });
   //9
   $('#nine').on('click', function(event) {

     var zilch = $("#me").html();

     if (zilch == "0" && !zilch.includes(".")) {
       $("#me").html("9");
     } else if (zilch === "x" ||zilch === "+" ||zilch === "-" ||zilch === "÷" ) {
        $("#me").html("9");
     } else {

       var hold = $("#me").text();

       hold = hold + 9;
       $("h3").html(hold);
     }
     event.preventDefault();

   });
   //4
   $('#four').on('click', function(event) {

     var zilch = $("#me").html();

     if (zilch == "0" && !zilch.includes(".")) {
       $("#me").html("4");
     } else if (zilch === "x" ||zilch === "+" ||zilch === "-" ||zilch === "÷" ) {
        $("#me").html("4");
     } else {

       var hold = $("#me").text();

       hold = hold + 4;
       $("h3").html(hold);
     }
     event.preventDefault();

   });
   //5
   $('#five').on('click', function(event) {

     var zilch = $("#me").html();

     if (zilch == "0" && !zilch.includes(".")) {
       $("#me").html("5");
     } else if (zilch === "x" ||zilch === "+" ||zilch === "-" ||zilch === "÷" ) {
        $("#me").html("5");
     } else {

       var hold = $("#me").text();

       hold = hold + 5;
       $("h3").html(hold);
     }
     event.preventDefault();

   });
   //6 button
   $('#six').on('click', function(event) {

     var zilch = $("#me").html();

     if (zilch == "0" && !zilch.includes(".")) {
       $("#me").html("6");
     } else if (zilch === "x" ||zilch === "+" ||zilch === "-" ||zilch === "÷" ) {
        $("#me").html("6");
     } else {

       var hold = $("#me").text();

       hold = hold + 6;
       $("h3").html(hold);
     }
     event.preventDefault();

   });
   //1 button
   $('#one').on('click', function(event) {

     var zilch = $("#me").html();

     if (zilch == "0" && !zilch.includes(".")) {
       $("#me").html("1");
     } else if (zilch === "x" ||zilch === "+" ||zilch === "-" ||zilch === "÷" ) {
        $("#me").html("1");
     } else {

       var hold = $("#me").text();

       hold = hold + 1;
       $("h3").html(hold);
     }
     event.preventDefault();

   });
   //2 button
   $('#two').on('click', function(event) {

     var zilch = $("#me").html();

     if (zilch == "0" && !zilch.includes(".")) {
       $("#me").html("2");
     } else if (zilch === "x" ||zilch === "+" ||zilch === "-" ||zilch === "÷" ) {
        $("#me").html("2");
     } else {

       var hold = $("#me").text();

       hold = hold + 2;
       $("h3").html(hold);
     }
     event.preventDefault();

   });
   //3 button
   $('#three').on('click', function(event) {

     var zilch = $("#me").html();

     if (zilch === 0 || "0" && !zilch.includes(".")) {
       $("#me").html("3");
     } else if (zilch === "x" ||zilch === "+" ||zilch === "-" ||zilch === "÷" ) {
        $("#me").html("3");
     } else {

       var hold = $("#me").text();

       hold = hold + 3;
       $("h3").html(hold);
     }
     event.preventDefault();

   });
   //zero button
   $('#zero').on('click', function(event) {

     var zilch = $("#me").html();

     if (zilch == "0" && !zilch.includes(".")) {

     } else {
       console.log("here");
       var hold = $("#me").text();

       hold = hold + "0";
       $("h3").html(hold);
     }
     event.preventDefault();

   });

   //decimal point button
   $('#dec').on('click', function(event) {

     var zilch = $("#me").text();

     if (zilch.includes(".") && zilch[0] !== 0) {
       var hold = $('#me').text();
       pre = parseFloat(hold);

     } else {

        hold = $("#me").text();

       hold = hold + ".";
       $("h3").html(hold);
     }
     event.preventDefault();

   });
   $('#plus').on('click', function(event) {
     var hold = $('#me').text();
     hold = parseFloat(hold);
    
     
     //test
     
     if (op === "+") {

       answer = pre + hold;
      // $('h3').html(answer);
       op = "+";
       pre= answer;
        $('h3').html("+");
       
     } else if (op === "-") {

        answer = pre - hold;
      // $('h3').html(answer);
       op = "+";
       pre= answer;
        $('h3').html("+");
       
     } else if (op === "x") {

        answer = pre * hold;
      // $('h3').html(answer);
       op = "+";
       pre= answer;
        $('h3').html("+");
     } else if (op === "÷") {

         answer = pre / hold;
      // $('h3').html(answer);
       op = "+";
       pre= answer;
        $('h3').html("+");
     } else {
     
      pre = hold;
     
     op = "+";
     $('h3').html("+");
     }

   });
   
   $('#minus').on('click', function(event) {
      var hold = $('#me').text();
     hold = parseFloat(hold);
    
     
     //test
     
     if (op === "+") {

       answer = pre + hold;
      // $('h3').html(answer);
       op = "-";
       pre= answer;
        $('h3').html("-");
       
     } else if (op === "-") {

        answer = pre - hold;
      // $('h3').html(answer);
       op = "-";
       pre= answer;
        $('h3').html("-");
       
     } else if (op === "x") {

        answer = pre * hold;
      // $('h3').html(answer);
       op = "-";
       pre= answer;
        $('h3').html("-");
     } else if (op === "÷") {

         answer = pre / hold;
      // $('h3').html(answer);
       op = "-";
       pre= answer;
        $('h3').html("-");
     } else {
     
      pre = hold;
     
     op = "-";
     $('h3').html("-");
     }

   });
   
      $('#divide').on('click', function(event) {
        var hold = $('#me').text();
     hold = parseFloat(hold);
    
     
     //test
     
     if (op === "+") {

       answer = pre + hold;
      // $('h3').html(answer);
       op = "÷";
       pre= answer;
        $('h3').html("÷");
       
     } else if (op === "-") {

        answer = pre - hold;
      // $('h3').html(answer);
       op = "÷";
       pre= answer;
        $('h3').html("÷");
       
     } else if (op === "x") {

        answer = pre * hold;
      // $('h3').html(answer);
       op = "÷";
       pre= answer;
        $('h3').html("÷");
     } else if (op === "÷") {

         answer = pre / hold;
      // $('h3').html(answer);
       op = "÷";
       pre= answer;
        $('h3').html("÷");
     } else {
     
      pre = hold;
     
     op = "÷";
     $('h3').html("÷");
     }

   });
   
   
   $('#times').on('click', function(event) {
     var hold = $('#me').text();
     hold = parseFloat(hold);
    
     
     //test
     
     if (op === "+") {

       answer = pre + hold;
      // $('h3').html(answer);
       op = "x";
       pre= answer;
        $('h3').html("x");
       
     } else if (op === "-") {

        answer = pre - hold;
      // $('h3').html(answer);
       op = "x";
       pre= answer;
        $('h3').html("x");
       
     } else if (op === "x") {

        answer = pre * hold;
      // $('h3').html(answer);
       op = "x";
       pre= answer;
        $('h3').html("x");
     } else if (op === "÷") {

         answer = pre / hold;
      // $('h3').html(answer);
       op = "x";
       pre= answer;
        $('h3').html("x");
     } else {
     
      pre = hold;
     
     op = "x";
     $('h3').html("x");
     }

   });
   
   
   $('#equals').on('click', function(event) {
     var hold = $('#me').text();
     hold = parseFloat(hold);
     if (op === "+") {

       answer = pre + hold;
       $('h3').html(answer);
       op = 0;
     pre = 0;
     hold=0;
     zilch = 0;
     } else if (op === "-") {

       answer = pre - hold;
       $('h3').html(answer);
       op = 0;
     pre = 0;
     hold=0;
     zilch = 0;
     } else if (op === "x") {

       answer = pre * hold;
       $('h3').html(answer);
       op = 0;
     pre = 0;
     hold=0;
     zilch = 0;
     } else if (op === "÷") {

       answer = pre / hold;
       $('h3').html(answer);
     } else {
       $('h3').html("ERROR");
       op = 0;
     pre = 0;
     hold=0;
     zilch = 0;
     }
op = 0;
     pre = 0;
     hold=0;
     zilch = 0;
   });
   //to do: decimals, operations, equals, and the math.  basically all the hard stuff... jia you!
 });