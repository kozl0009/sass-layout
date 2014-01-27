var searchOpen = false;

$(document).ready(function(){ 
    //add to the array the ids of each animal element 
    searchTrigger = $("#search-signin .search-trigger"); 
	searchBar = $("#search-bar");
	//searchBar.hide();
    $(searchTrigger).click(function() {
        // Hide the trigger image:
        $('#search-signin').hide();
		$('#social-links').hide();
        // At the same time slide the div open
        $(searchBar).animate({width:250},1000, function(){
            searchOpen = true;			
        });
		
		$(".searchBar").focus(function() {
			$(this).val('');
			searchOpen = false;
		});	
		$(".searchBar").focusout(function() {
			searchOpen = true;
		});	
		
    });
	
	$(document).click(function() {
		if(searchOpen==true){
			$(searchBar).animate({width:0},1000, function(){
				$('#search-signin').show();
				$('#social-links').show();	
				searchOpen = false;
			});
		}
	});
	
	$(function() {
    $( document ).tooltip({
		position: {
			my: "center bottom-20",
			at: "center top",
			using: function( position, feedback ) {
			$( this ).css( position );
				$( "<div>" )
					.addClass( "arrow" )
					.addClass( feedback.vertical )
					.addClass( feedback.horizontal )
					.appendTo( this );
				}
			}
		});
	});
}); 