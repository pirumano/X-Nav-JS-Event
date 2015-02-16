$( "#color" ).change(function() {
	var color = $("#color").val();
	$('body').css("background-color", color);
});