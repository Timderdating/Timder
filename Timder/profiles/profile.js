// A $( document ).ready() block.
$( document ).ready(function() {

    // Nested profile array
    var profiles = [{
        'folder': 'normal_tim',
        'name': 'Tim Huynh',
        'bio': "I make aggressively medium bank."
    },
    {
        'folder': 'nerdy_tim',
        'name': 'Nerdy Tim',
        'bio': "If you were a triangle you'd be acute one."
    },
    {
        'folder': 'tiny_tim',
        'name': 'Tiny Tim',
        'bio': "God bless us! Every one!"
    },
    {
        'folder': 'turner_tim',
        'name': 'Timmy Turner',
        'bio': "Timmy is an average kid and no one understands. Mom and dad and Vicky always giving him commands."
    },
    {
        'folder': 'kpop_tim',
        'name': '티모시',
        'bio': "I'm so sick of this fake love."
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
        var randomNumber = Math.floor((Math.random() * 3) + 1);
        if (randomNumber == 2){
            console.log("randomNumber:"+ randomNumber)
            $('#likeModal').modal('show');
        } else {
            $('.mainProfileCard').addClass('fadeOutRight');
             setTimeout(function(){
                $('.mainProfileCard').removeClass('fadeOutRight');
                generateProfile();
                $('.mainProfileCard').addClass('fadeIn');
            }, 750);
        }
    });

    // NVM Button on the Modal
    $(".nvmBtn").on('click', function() {
        $('.mainProfileCard').addClass('fadeOutRight');
        setTimeout(function(){
            $('.mainProfileCard').removeClass('fadeOutRight');
            generateProfile();
            $('.mainProfileCard').addClass('fadeIn');
        }, 750);
    });

    // Dislike Button
    $(".dislikeBtn").on('click', function() {
        $('.mainProfileCard').addClass('fadeOutLeft');
        setTimeout(function(){
            $('.mainProfileCard').removeClass('fadeOutLeft');
            generateProfile();
            $('.mainProfileCard').addClass('fadeIn');
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
