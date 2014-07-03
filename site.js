$(document).ready(function() {

				// Grab the current date
				var currentDate = new Date();

				// Set some date in the future. In this case, it's always Jan 1
				var futureDate  = new Date(Date.UTC(2014, 8, 6 , 13, 0, 0));

				// Calculate the difference in seconds between the future and current date
				var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

				// Instantiate a coutdown FlipClock
				clock = $('.clock').FlipClock(diff, {
					clockFace: 'DailyCounter',
					countdown: true,
					showSeconds: false
				});
			});



$('.nav a').on('click', function() {
    if ($(".navbar-toggle").is(":visible")) {
        $(".navbar-toggle").click();
    }
});

var tag = "dimaolgawedding";
var id = "7a9d62031e53419b86a6479856986ce4";
var photoCount = 16;

                    $.ajax({
  type: "GET",
  dataType: "jsonp",
  cache: false,
  url: "https://api.instagram.com/v1/tags/" + tag + "/media/recent?client_id=" + id,
  success: function(response) {
    var length = response.data != 'undefined' ? response.data.length : 0;
    var limit = photoCount != null && photoCount < length ? photoCount : length;
    if(limit > 0) {
      for(var i = 0; i < limit; i++) {
                $('<a>', {
                    href : response.data[i].link,
                    target : '_blank',
                    title : ''
                }).append(
                    $('<img>', {
                      src: response.data[i].images.low_resolution.url,
                      alt: response.data[i].caption.text,
                      title: response.data[i].caption.text,
                      width: 250,
                      height: 250
                    })
                ).appendTo($("#polaroid-images"));
      }
    }
  }
});


