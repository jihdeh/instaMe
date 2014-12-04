
var instagram = {

  initialize: function(){
    instagram.forms();
  },

  display: function(photos){
    var photo = "";
    $.each(photos.data, function(index, photos){
      if(index === 12){
        return false;
      }
      photo += "<div class='box'><div class='boxInner'>" +
           "<a href='" + photos.link + "' target='_blank'>" + 
           "<img src='" + photos.images.low_resolution.url + "' width='250'  height='250' />" +
                   "</a>" +
                   "<div class='titleBox'><span class='heart'><strong>" + photos.likes.count + "Likes</strong></span></div>" +
                   "</div></div>";
    });//END EACH
    $('.wrap').html(photo);
  },

  tags: function(tag){
    var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=4d90e5c04a4246bca4a7cccd613eb5bb";
    $.getJSON(url, instagram.display);
  },

  forms: function(){
    $('form').submit(function (evt){
      evt.preventDefault();
      var $search = $('#search');
      var $submit = $('#submit');
      var tag = $('#search').val();
      instagram.tags(tag);
    });//End Submit
  }
};
$(document).ready(instagram.initialize);
$(function(){
  //initialize instagram photos
  
 // See if this is a touch device
 if ('ontouchstart' in window)
 {
    // Set the correct [touchscreen] body class
    $('body').removeClass('no-touch').addClass('touch');
   
    // Add the touch toggle to show text when tapped
    $('div.boxInner img').click(function(){
       $(this).closest('.boxInner').toggleClass('touchFocus');
    });
   }
});