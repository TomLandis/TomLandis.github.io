 $(document).ready(function() {

   var quoteFinal = "Not working yet";

   function getNewQuote() {
     $.ajax({
       url: 'http://api.forismatic.com/api/1.0/',
       jsonp: 'jsonp',
       dataType: 'jsonp',
       data: {
         method: 'getQuote',
         lang: 'en',
         format: 'jsonp'

       },
       success: function(response) {
         quote = response.quoteText;
         author = response.quoteAuthor;
         
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