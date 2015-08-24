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
        var context = {}
        $.each(data, function(key, post) {
          context[key] = {
            link: post.link,
            uri: post.image_uri,
            title: post.message.substr(0, 28),
            action: 'Check it out'
          }
        });
        var output = Handlebars.templates.social(context);
        $("#life .container").append(output);
      });
    }
  };
}();