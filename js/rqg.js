 $(document).ready(function() {

   var quoteFinal = "Not working yet";

   function getNewQuote() {
     $.ajax({
       url: 'https://random-quote-generator.herokuapp.com/api/quotes/random',
      
      
       success: function(response) {
         quote = response.quote;
         author = response.author;
         
         $('#quote').text(quote);
         if (author) {
           $('#author').text('- ' + author);
           quoteFinal = response.quoteText;
         } else {
           $('#author').text('- unknown');
         }
       }
     });
   }
   getNewQuote();

   $('.pmt').on('click', function(event) {
     event.preventDefault();
     getNewQuote();
   });
   $('.tweetThatTrash').on('click', function(event){
     
     window.open("https://twitter.com/intent/tweet?text=" + quote + ' - ' + author);
   });
   
 });
