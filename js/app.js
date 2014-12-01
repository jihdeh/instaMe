$(function(){
var url = "https://api.instagram.com/v1/media/popular?access_token=7ea79a955bc64d6abeacbcaed2ebedb3"

$.ajax(url, {
	dataType: "jsonp",
	cache: "value", 
	success: function(data){
		for(var i=0; i< 6; i++){
			$('#gallery').append('<ul><li><img src=' + data.data[i].images.low_resolution.url + '/>' + '</li></ul>');
		}
	}
});//End ajax Call


});//End Jquery