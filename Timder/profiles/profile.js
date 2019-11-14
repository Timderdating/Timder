// A $( document ).ready() block.
$( document ).ready(function() {
    //First Profile
    var firstProfile = [{
        'folder': 'normal_tim',
        'name': 'Tim Huynh',
        'career': 'Web Developer',
        'bio': "The other guys on this dating app are losers."
    }];

    // Generate first profile
    function originalProfile(){
        var profileOne = firstProfile[0].folder;
        var bioText = firstProfile[0].bio;
        var profileName = firstProfile[0].name;
        var career = firstProfile[0].career;

        // Enter folder of randomly selected profile for images
        $('img.picture1').attr('src', 'Timder/profiles/'+profileOne+'/1.jpg');
        $('img.picture2').attr('src', 'Timder/profiles/'+profileOne+'/2.jpg');
        $('img.picture3').attr('src', 'Timder/profiles/'+profileOne+'/3.jpg');

        // Display bio and name of corresponding profile
        $('.bioInfo').text(bioText);
        $('.profName').text(profileName);
        $('.career').text(career);
    }

    // Last Profile
    var lastProfile = [{
        'folder': 'last_profile',
        'name': 'Sadness',
        'career': 'Loneliness',
        'bio': "Welp, looks like you're going to end up alone. Or not! Why don't you try these other set of profiles?"
    }];

    function profileLast(){
        var profileEnd = lastProfile[0].folder;
        var bioText = lastProfile[0].bio;
        var profileName = lastProfile[0].name;
        var career = lastProfile[0].career;
        $('.carousel-item').addClass('short');
        $('.noBtn').hide();
        $('.restartBtn').show();
        $('.tryWrapper').show();
        $('.restartBtn').addClass('restartCtr');

        // Last Picture
        $('img.picture1').attr('src', 'Timder/profiles/'+profileEnd+'/1.jpg');
        $('img.picture2').attr('src', 'Timder/profiles/'+profileEnd+'/2.jpg');
        $('img.picture3').attr('src', 'Timder/profiles/'+profileEnd+'/3.jpg');
        // Display bio and name of corresponding profile
        $('.bioInfo').text(bioText);
        $('.profName').text(profileName);
        $('.career').text(career);
    }

    // Nested profile array
    var profiles = [
    {
        'folder': 'tiny_tim',
        'name': 'Tiny Tim',
        'career': 'Orphan',
        'bio': "Big things come in tiny packages."
    },
    {
        'folder': 'turner_tim',
        'name': 'Timmy Turner',
        'career': 'Average Kid',
        'bio': "Timmy is an average kid and no one understands. Mom and dad and Vicky always giving him commands."
    },
    {
        'folder': 'kpop_tim',
        'name': '티모시',
        'career': 'K-POP Idol',
        'bio': "I can give you a big bang. My favorite position is T.O.P."
    },
    {
        'folder': 'bat_tim',
        'name': 'Bat Tim',
        'career': 'I am the Knight',
        'bio': "Patrolling the streets of Gotham gets so lonely."
    },
    {
        'folder': 'mormon_tim',
        'name': 'Mormon Tim',
        'career': 'Jesus Lover',
        'bio': "I read through the book of Numbers and I realized I didn't have yours."
    },
    {
        'folder': 'elf_tim',
        'name': 'Elf',
        'career': "On a shelf",
        'bio': "I'll let Santa know if you're naughty or nice."
    },
    {
        'folder': 'hostage_tim',
        'name': 'Hostage Tim',
        'career': 'Just an innocent guy',
        'bio': "For the love of God please like! He's not gonna let me go!"
    },
    {
        'folder': 'tool_tim',
        'name': "Tim the Builder",
        'career': 'You know my cousin Bob',
        'bio': "I heard your heart is broken, I can fix that."
    },
    {
        'folder': 'yugi_tim',
        'name': "Tim Kaiba",
        'career': 'Duel Master',
        'bio': "They don't call me Lord of D. for nothing."
    },
    {
        'folder': 'tiff',
        'name': "Timberly",
        'career': 'QUEEN',
        'bio': "I heard you like bad girls. I'm bad at everything."
    },
    {
        'folder': 'tim_burr',
        'name': "Tim Burr",
        'career': 'Lumber Jack',
        'bio': "I got all the wood you'll ever need."

    },
    {
        'folder': 'timothy',
        'name': "Timothy",
        'career': 'Retired',
        'bio': "I miss my wife."
    },
    {
        'folder': 'andrew_yang',
        'name': "Andrew Yang",
        'career': 'Yang2020',
        'bio': "There's an Asian man running for president who wants to give you a thousand dollars a month. "
    }/*,
    {
        'folder': 'dog_tim',
        'name': "Tuff",
        'career': 'doggo',
        'bio': "Awoo!"
    }*/
    ];

    var originalProfileList = JSON.parse(JSON.stringify(profiles));

    // Preload images to avoid flickering
    for (var x = 0; x < profiles.length; x++) {
        console.log("profiles[x].folder: " + profiles[x].folder);
        (new Image).src = 'Timder/profiles/'+profiles[x].folder+'/1.jpg';
        (new Image).src = 'Timder/profiles/'+profiles[x].folder+'/2.jpg';
        (new Image).src = 'Timder/profiles/'+profiles[x].folder+'/3.jpg';
    }

    // Generate other Profiles
    function generateProfile(){
        if( profiles.length == 0){
            console.log("Last profile generated");
            profileLast();
            //profiles = JSON.parse(JSON.stringify(originalProfileList));
        }

        else {
            // Randomly select a profile
            var randomIndex = Math.floor((Math.random() * profiles.length));
            var randomProfile = profiles[randomIndex].folder;
            var bioText = profiles[randomIndex].bio;
            var profileName = profiles[randomIndex].name;
            var career = profiles[randomIndex].career;

            // Enter folder of randomly selected profile for images
            $('img.picture1').attr('src', 'Timder/profiles/'+randomProfile+'/1.jpg');
            $('img.picture2').attr('src', 'Timder/profiles/'+randomProfile+'/2.jpg');
            $('img.picture3').attr('src', 'Timder/profiles/'+randomProfile+'/3.jpg');

            // Display bio and name of corresponding profile
            $('.bioInfo').text(bioText);

            // If Andrew Yang selected
            if (profileName.includes("Yang")) {
                $('.bioInfo').append('<a target="_blank" href="https://www.yang2020.com">YANG 2020</a>');
            }

            $('.profName').text(profileName);
            $('.career').text(career);


            // Remove profile from list to generate
            profiles.splice(randomIndex, 1);
        }
    };

    // To restart the array when the button is clicked.
    function restartArray(){
        profiles = JSON.parse(JSON.stringify(originalProfileList));
        console.log('profiles.length: '+ profiles.length);
        originalProfile();
        $('.restartBtn').hide();
        $('.tryWrapper').show();
        $('.noBtn').show();
    }

    // When document loads, generate a random profile
    // generateProfile();

    // When document loads, generate the original Tim profile
    originalProfile();

    // Restart Button
    $(".restartBtn").on('click', function() {
        $('.mainProfileCard').addClass('fadeOutRight');
        setTimeout(function(){
            $('.mainProfileCard').removeClass('fadeOutRight');
            restartArray();
            $('.mainProfileCard').addClass('fadeIn');
        }, 750);
        console.log('restart working');
    });

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
