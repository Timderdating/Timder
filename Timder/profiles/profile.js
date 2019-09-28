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
    },
    {
        'folder': 'kpop_tim',
        'name': 'cumsomemeda',
        'bio': 'boobgogi is my favorite.'
    }];

    var originalProfileList = JSON.parse(JSON.stringify(profiles));

    function generateProfile(){
        // Randomly select a profile
        var randomIndex = Math.floor((Math.random() * profiles.length));
        var randomProfile = profiles[randomIndex].folder;
        var bioText = profiles[randomIndex].bio;
        var profileName = profiles[randomIndex].name;

        // Enter folder of randomly selected profile for images
        $('img.picture1').attr('src', 'Timder/profiles/'+randomProfile+'/1.jpg');
        $('img.picture2').attr('src', 'Timder/profiles/'+randomProfile+'/2.jpg');
        $('img.picture3').attr('src', 'Timder/profiles/'+randomProfile+'/3.jpg');

        // Display bio and name of corresponding profile
        $('.bioInfo').text(bioText);
        $('.profName').text(profileName);

        // Remove profile from list to generate
        profiles.splice(randomIndex, 1);
        if( profiles.length == 0){
            profiles = JSON.parse(JSON.stringify(originalProfileList));
        }
    }

    // When document loads, generate a random profile
    generateProfile();

    // Like Button
    $(".likeBtn").on('click', function() {
        $('#likeModal').modal('show');
    });

    // Dislike Button
    $(".dislikeBtn").on('click', function() {
        generateProfile();
        $('.mainProfileCard').addClass('fadeOutLeft');
        setTimeout(function(){ 
            $('.mainProfileCard').removeClass('fadeOutLeft'); 
            $('.mainProfileCard').addClass('fadeInLeft');
        }, 750);
    });

    $("body").keydown(function(e) {
    	if (e.which === 39) {
    		$(".likeBtn").trigger( "click" );
    	}
        else if (e.which === 37) {
            $(".dislikeBtn").trigger( "click" );
        }
    });
});
