	//Search box - Enter key press
	var input = document.getElementById("location-search");
	input.addEventListener("keyup", function(event) {
 	 if (event.keyCode === 13) {
   		event.preventDefault();
   		document.getElementById("btn").click();
     }
	});