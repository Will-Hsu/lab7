'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.likeBtn').click(addProjectDetails); // handler
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) { // listener
	ga("send", "event", 'like', 'click');
}