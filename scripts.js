$(document).ready(function(){
  // Show the loader while the quotes are being fetched
  $("#loaderDiv").show();

  // Make the AJAX request to get the quotes
  $.ajax({
    url: 'https://smileschool-api.hbtn.info/quotes',
    type: "get",
    success: function(response) {
      // Hide the loader now that the quotes have been fetched
      $("#loaderDiv").hide(8000);

      // Loop through the quotes and append them to the carousel
      for (let i = 0; i < response.length; i++) {
        let quote = response[i];   
        let $html = $(`
        <div class="carousel-item carousel-item-content ${i === 0 ? 'active' : ''}">
            <div class="row">
                <div class="col-sm-3 text-center " >
                    <img class="rounded-circle" src=${quote.pic_url} class="d-block w-100" alt="random person image">
                </div>
                <div class=" col-sm-8 ml-3 d-flex flex-column" style="margin-top: 10%; max-width: 80%; padding-left: 150px;">
                    <div>&lt;&lt; ${quote.text} &gt;&gt;</div>
                    <div class="font-weight-bold mt-3">${quote.name}</div>
                    <div>${quote.title}</div>
                </div>
            </div>
        </div>`);
        $("#quotesCarouselInner").append($html);
      }
    },
    // If there was an error fetching the quotes, display an error message
    error: function(jqXHR, textStatus, errorThrown) {
      $("#QuotesLoader").hide();
      console.error("An error occurred while fetching quotes:", textStatus, errorThrown);
    }
  });
});
