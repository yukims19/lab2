'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});

	  // Add any additional listeners here
    $("a.thumbnail").click(projectClick);

	// example: $("#div-id").click(functionToCall);
}

function projectClick(e){
    e.preventDefault();
    $(this).css("background-color", "#7fff00");
}
