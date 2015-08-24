var SocialMedia = function() {
  this.apiUrl = "http://api.bhasselbeck.local/v1";
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

var socialContent = function(post) {
  var output = '';
  var context = {
    link: post.link,
    uri: post.image_uri,
    message: post.message.substr(0, 28),
    action: 'Check it out'
  }
  output += Handlebars.templates.social(context);
  return output;
}

var social = function () {
  return {
    init: function () {
      var request = new SocialMedia();
      request.getSocial('facebook', function(data) {
        var output = '';
        $.each(data, function(key, post) {
          if (key < 4) {
            if (key == 0) {
              output += '<div class="row row-space-10">';
            }
            output += socialContent(post);
            if (key == 3) {
              output += '</div>';
            }
          }
          if (key >= 4 && key < 8) {
            if (key == 4) {
              output += '<div class="row row-space-10">';
            }
            output += socialContent(post);
            if (key == 7) {
              output += '</div>';
            }
          }
          if (key >= 8 && key < 12) {
            if (key == 8) {
              output += '<div class="row row-space-10">';
            }
            output += socialContent(post);
            if (key == 11) {
              output += '</div>';
            }
          }
          if (key >= 12 && key < 16) {
            if (key == 12) {
              output += '<div class="row row-space-10">';
            }
            output += socialContent(post);
            if (key == 15) {
              output += '</div>';
            }
          }
        });
        $("#life .container").append(output);
      });
    }
  };
}();