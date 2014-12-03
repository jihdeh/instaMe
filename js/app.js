
var instagram = {

  initialize: function(){
    instagram.forms();
  },

  display: function(photos){
    $.each(photos.data, function(index, photos){
      if(index === 6){
        return false;
      }
      photos = "<li>" +
           "<a href='" + photos.link + "' target='_blank'>" + 
           "<img class='main' src='" + photos.images.low_resolution.url + "' width='250'  height='250' />" +
                   "</a>" +
                   "<img class='avatar' width='40' height='40' src='" + photos.user.profile_picture + "' />" +
                   "<span class='heart'><strong>" + photos.likes.count + "</strong></span>" +
                   "</li>";
              $('#insta_images').append(photos);
          
    });
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