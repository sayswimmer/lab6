'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	$('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
	var project = this;
	$.get('http://localhost:3000/project/'+idNumber, function callback(result) {
		console.log(result);
		addProject(projectID, result);
	})

	console.log("User clicked on project " + idNumber, projectID, idNumber);
}

function addProject(id,result) {
	var projectHTML = '<a href="#" class="thumbnail">' +
	  '<img src="' + result['image'] + '" class="img detailsImage">' +
	  '<p>' + result['title'] + '</p>' +
	  '<p><small>' + result['date'] +
	  '</small></p></a>' + result['summary'];
	$('#'+id).find('.details').html(projectHTML)
  }