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

var socialContent = function(post) {
  var output = '';
  output += '<div class="col-md-3 col-sm-6">' +
    '<div class="work">' +
    '<div class="image">' +
    '<a href="' + post.link + '"><img alt="Work 1" src="' + post.image_uri +'"></a>' +
    '</div>' +
    '<div class="desc">' +
    '<span class="desc-title">' + post.message.substr(0, 28) + '...</span>' +
    '<span class="desc-text">Check it out</span>' +
    '</div>' +
    '</div>' +
    '</div>';
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