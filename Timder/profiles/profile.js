// A $( document ).ready() block.
$( document ).ready(function() {

    // Nested profile array
    var profiles = [{
        'folder': 'normal_tim',
        'name': 'Tim Huynh',
        'bio': "You already know he's a bitch."
    },
    {
        'folder': 'nerdy_tim',
        'name': 'Nerdy Tim',
        'bio': 'e=mc2, u = arqt'
    }];

	// Randomly select a profile
	var randomIndex = Math.floor((Math.random() * profiles.length));
	var randomProfile = profiles[randomIndex].folder;
    var bioText = profiles[randomIndex].bio;
    var profileName = profiles[randomIndex].name;

	// Enter folder of randomly selected profile for images
	$('img.picture1').attr('src', randomProfile+'/1.jpg');
	$('img.picture2').attr('src', randomProfile+'/2.jpg');
	$('img.picture3').attr('src', randomProfile+'/3.jpg');

    // Display bio and name of corresponding profile
    $('.bioInfo').text(bioText);
    $('.profName').text(profileName);

    $(".likeBtn").on('click', function() {
    	$('#likeModal').modal('show');
    });

    $("body").keydown(function(e) {
    	if (e.which === 39) {
    		$(".likeBtn").trigger( "click" );
    	}
        else if (e.which === 37) {
            $(".likeBtn").trigger( "click" );
        }
    });
});
