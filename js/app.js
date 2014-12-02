$(function(){
// var url = "https://api.instagram.com/v1/media/popular?access_token=7ea79a955bc64d6abeacbcaed2ebedb3";

$.ajax({
	type: "GET",
	dataType: "jsonp",
	cache: false, 
	url: "https://api.instagram.com/v1/media/popular?client_id=7ea79a955bc64d6abeacbcaed2ebedb3",
	success: function (data){
		for(var i=0; i< 6; i++){
			$('#gallery').append("<li><a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url + "'></img></a></li>");
		}
	}
});//End ajax Call


});//End Jquery