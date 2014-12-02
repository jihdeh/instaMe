$(function(){
$('form').submit(function(evt){
	evt.preventDefault();
	var url = "https://api.instagram.com/v1/media/popular?client_id=4d90e5c04a4246bca4a7cccd613eb5bb";
	var $search = $('#search');
	var $submit = $('#submit');
	var name = $search.val();
 var instaOptions = {
 	tags: name,
 	format: "jsonp"
 };
$.ajax(url, instaOptions, {
	type: "GET",
	dataType: "jsonp",
	cache: false, 
	tags: name,
	
	success: function (response){
		for (var i = 0; i < 6; i++) {
          $("#insta_images").append("<li><img src='" + response.data[i].images.low_resolution.url + "'/></li>");
    }
	}
});//End ajax Call
});

});//End Jquery