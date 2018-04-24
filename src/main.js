import $ from 'jquery';
import 'bootstrap';

$(document).ready(function() {
  $('#theGif').click(function() {
    setInterval(()=>{
      $.ajax({
        url: `https://api.giphy.com/v1/gifs/random?api_key=[API-KEY-GOES-HERE]&tag=goldblum&offset=2&rating=G&lang=en&height=400`,
        type: 'GET',
        data: {
          format: 'json'
        },
        success: function(response) {
          $('.errors').append(`<img src="${response.data.images.fixed_width.url}" alt="batman">`);
        },
        error: function() {
          $('#errors').text("There was an error processing your request. Please try again.")
        }
      });
    },1000/30);
  });
});
