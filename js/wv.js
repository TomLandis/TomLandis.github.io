$(document).ready(function() {

  //random button

  $('#rwa').on('click', function(event) {

    window.open("https://en.wikipedia.org/wiki/Special:Random");
  });

  //enter key search
  
  $("#userInput").keyup(function(event){
    if(event.keyCode == 13){
        $("#go").click();
    }
});
  
  //search button

  $('#go').on('click', function(event) {

    var lookFor = userInput.value;
    var apiUrl = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + lookFor + "&format=json&callback=?"
    $.ajax({
      url: apiUrl,
      type: "GET",
      async: false,
      dataType: "json",
      success: function(data, status, jqXHR) {
        var i = 0;
        for (i = 0; i < 10; i++) {
          $('#results' + i).html("<a href='https://en.wikipedia.org/wiki/" + data.query.search[i].title + "' target='_blank'> <div id='boxed'><h2>" + data.query.search[i].title + '</h2> <h4>' + data.query.search[i].snippet + '</h4></div></a>')
         

        }

      }

    })
  
      $('#results0').slideDown("slow", function() {
         $('#results1').slideDown("slow", function() {
            $('#results2').slideDown("slow", function(){
           $('#results3').slideDown("slow", function(){
            $('#results4').slideDown("slow", function(){
            $('#results5').slideDown("slow", function(){
             $('#results6').slideDown("slow", function(){
                $('#results7').slideDown("slow", function(){ $('#results8').slideDown("slow",function(){
                   $('#results9').slideDown("slow");
                });
                  
                });
             }); 
            });  
            });  
           });
            });
         });
      });
   
   
   
   
    
    
   
   
   
    
    

   
    
    
  });
  
  
  
});
