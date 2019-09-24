// A $( document ).ready() block.
$( document ).ready(function() {

	// Array of profiles
	var profiles = ['normal_tim']

	// Randomly select a profile
	var randomIndex = Math.floor((Math.random() * profiles.length));
	var randomProfile = profiles[randomIndex];
	randomProfile = randomProfile.toLowerCase();

	// Enter folder of randomly selected profile
	$('img.picture1').attr('src', randomProfile+'/1.jpg');
	$('img.picture2').attr('src', randomProfile+'/2.jpg');
	$('img.picture3').attr('src', randomProfile+'/3.jpg');

    $(".likeBtn").on('click', function() {
    	$('#likeModal').modal('show');
    });

    $("body").keydown(function(e) {
    	if (e.which === 39) {
    		$(".likeBtn").trigger( "click" );
    	}
    });
});