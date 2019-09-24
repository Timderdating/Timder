// A $( document ).ready() block.
$( document ).ready(function() {

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
