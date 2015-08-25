var SocialMedia = function() {
  this.apiUrl = "http://eebhasselbeckdev.prod.acquia-sites.com/v1";
};

SocialMedia.prototype.request = function(url, callback) {
  $.getJSON(url, function(data) {
    callback(data);
  });
};

SocialMedia.prototype.parameters = function(object) {
  return $.param(object);
};

SocialMedia.prototype.getSocial = function(platform, callback) {
  var query = SocialMedia.prototype.parameters({
    platform: platform
  });
  SocialMedia.prototype.request(this.apiUrl + '/social?' + query, function(data) {
    callback(data);
  });
};

var social = function () {
  return {
    init: function () {
      var request = new SocialMedia();
      request.getSocial('facebook', function(data) {
        var output = '';
        $.each(data, function(key, post) {
          if (key % 4 === 0) {
            if (key != 0) {
              output += '</div>';
            }
            output += '<div class="row">';
          }
          output += Handlebars.templates.social({
            link: post.link,
            uri: post.image_uri,
            title: post.message,
            platform: 'facebook'
          });
        });
        $("#life .container").append(output);
      });
    }
  };
}();