(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['social'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

    return "<div class=\"row row-space-10\">\n  <div class=\"col-md-3 col-sm-6\">\n    <div class=\"work\">\n      <div class=\"image\">\n        <a href=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['0'] : depth0)) != null ? stack1.link : stack1), depth0))
      + "\"><img src=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['0'] : depth0)) != null ? stack1.uri : stack1), depth0))
      + "\" alt=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['0'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "\"></a>\n      </div>\n      <div class=\"desc\">\n        <span class=\"desc-title\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['0'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "</span>\n        <span class=\"desc-text\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['0'] : depth0)) != null ? stack1.action : stack1), depth0))
      + "</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3 col-sm-6\">\n    <div class=\"work\">\n      <div class=\"image\">\n        <a href=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['1'] : depth0)) != null ? stack1.link : stack1), depth0))
      + "\"><img src=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['1'] : depth0)) != null ? stack1.uri : stack1), depth0))
      + "\" alt=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['1'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "\"></a>\n      </div>\n      <div class=\"desc\">\n        <span class=\"desc-title\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['1'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "</span>\n        <span class=\"desc-text\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['1'] : depth0)) != null ? stack1.action : stack1), depth0))
      + "</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3 col-sm-6\">\n    <div class=\"work\">\n      <div class=\"image\">\n        <a href=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['2'] : depth0)) != null ? stack1.link : stack1), depth0))
      + "\"><img src=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['2'] : depth0)) != null ? stack1.uri : stack1), depth0))
      + "\" alt=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['2'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "\"></a>\n      </div>\n      <div class=\"desc\">\n        <span class=\"desc-title\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['2'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "</span>\n        <span class=\"desc-text\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['2'] : depth0)) != null ? stack1.action : stack1), depth0))
      + "</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3 col-sm-6\">\n    <div class=\"work\">\n      <div class=\"image\">\n        <a href=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['3'] : depth0)) != null ? stack1.link : stack1), depth0))
      + "\"><img src=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['3'] : depth0)) != null ? stack1.uri : stack1), depth0))
      + "\" alt=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['3'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "\"></a>\n      </div>\n      <div class=\"desc\">\n        <span class=\"desc-title\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['3'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "</span>\n        <span class=\"desc-text\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['3'] : depth0)) != null ? stack1.action : stack1), depth0))
      + "</span>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row row-space-10\">\n  <div class=\"col-md-3 col-sm-6\">\n    <div class=\"work\">\n      <div class=\"image\">\n        <a href=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['4'] : depth0)) != null ? stack1.link : stack1), depth0))
      + "\"><img src=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['4'] : depth0)) != null ? stack1.uri : stack1), depth0))
      + "\" alt=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['4'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "\"></a>\n      </div>\n      <div class=\"desc\">\n        <span class=\"desc-title\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['4'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "</span>\n        <span class=\"desc-text\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['4'] : depth0)) != null ? stack1.action : stack1), depth0))
      + "</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3 col-sm-6\">\n    <div class=\"work\">\n      <div class=\"image\">\n        <a href=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['5'] : depth0)) != null ? stack1.link : stack1), depth0))
      + "\"><img src=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['5'] : depth0)) != null ? stack1.uri : stack1), depth0))
      + "\" alt=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['5'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "\"></a>\n      </div>\n      <div class=\"desc\">\n        <span class=\"desc-title\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['5'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "</span>\n        <span class=\"desc-text\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['5'] : depth0)) != null ? stack1.action : stack1), depth0))
      + "</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3 col-sm-6\">\n    <div class=\"work\">\n      <div class=\"image\">\n        <a href=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['6'] : depth0)) != null ? stack1.link : stack1), depth0))
      + "\"><img src=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['6'] : depth0)) != null ? stack1.uri : stack1), depth0))
      + "\" alt=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['6'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "\"></a>\n      </div>\n      <div class=\"desc\">\n        <span class=\"desc-title\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['6'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "</span>\n        <span class=\"desc-text\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['6'] : depth0)) != null ? stack1.action : stack1), depth0))
      + "</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3 col-sm-6\">\n    <div class=\"work\">\n      <div class=\"image\">\n        <a href=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['7'] : depth0)) != null ? stack1.link : stack1), depth0))
      + "\"><img src=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['7'] : depth0)) != null ? stack1.uri : stack1), depth0))
      + "\" alt=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['7'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "\"></a>\n      </div>\n      <div class=\"desc\">\n        <span class=\"desc-title\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['7'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "</span>\n        <span class=\"desc-text\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['7'] : depth0)) != null ? stack1.action : stack1), depth0))
      + "</span>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row row-space-10\">\n  <div class=\"col-md-3 col-sm-6\">\n    <div class=\"work\">\n      <div class=\"image\">\n        <a href=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['8'] : depth0)) != null ? stack1.link : stack1), depth0))
      + "\"><img src=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['8'] : depth0)) != null ? stack1.uri : stack1), depth0))
      + "\" alt=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['8'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "\"></a>\n      </div>\n      <div class=\"desc\">\n        <span class=\"desc-title\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['8'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "</span>\n        <span class=\"desc-text\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['8'] : depth0)) != null ? stack1.action : stack1), depth0))
      + "</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3 col-sm-6\">\n    <div class=\"work\">\n      <div class=\"image\">\n        <a href=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['9'] : depth0)) != null ? stack1.link : stack1), depth0))
      + "\"><img src=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['9'] : depth0)) != null ? stack1.uri : stack1), depth0))
      + "\" alt=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['9'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "\"></a>\n      </div>\n      <div class=\"desc\">\n        <span class=\"desc-title\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['9'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "</span>\n        <span class=\"desc-text\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['9'] : depth0)) != null ? stack1.action : stack1), depth0))
      + "</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3 col-sm-6\">\n    <div class=\"work\">\n      <div class=\"image\">\n        <a href=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['10'] : depth0)) != null ? stack1.link : stack1), depth0))
      + "\"><img src=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['10'] : depth0)) != null ? stack1.uri : stack1), depth0))
      + "\" alt=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['10'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "\"></a>\n      </div>\n      <div class=\"desc\">\n        <span class=\"desc-title\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['10'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "</span>\n        <span class=\"desc-text\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['10'] : depth0)) != null ? stack1.action : stack1), depth0))
      + "</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3 col-sm-6\">\n    <div class=\"work\">\n      <div class=\"image\">\n        <a href=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['11'] : depth0)) != null ? stack1.link : stack1), depth0))
      + "\"><img src=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['11'] : depth0)) != null ? stack1.uri : stack1), depth0))
      + "\" alt=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['11'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "\"></a>\n      </div>\n      <div class=\"desc\">\n        <span class=\"desc-title\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['11'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "</span>\n        <span class=\"desc-text\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['11'] : depth0)) != null ? stack1.action : stack1), depth0))
      + "</span>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row row-space-10\">\n  <div class=\"col-md-3 col-sm-6\">\n    <div class=\"work\">\n      <div class=\"image\">\n        <a href=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['12'] : depth0)) != null ? stack1.link : stack1), depth0))
      + "\"><img src=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['12'] : depth0)) != null ? stack1.uri : stack1), depth0))
      + "\" alt=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['12'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "\"></a>\n      </div>\n      <div class=\"desc\">\n        <span class=\"desc-title\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['12'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "</span>\n        <span class=\"desc-text\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['12'] : depth0)) != null ? stack1.action : stack1), depth0))
      + "</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3 col-sm-6\">\n    <div class=\"work\">\n      <div class=\"image\">\n        <a href=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['13'] : depth0)) != null ? stack1.link : stack1), depth0))
      + "\"><img src=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['13'] : depth0)) != null ? stack1.uri : stack1), depth0))
      + "\" alt=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['13'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "\"></a>\n      </div>\n      <div class=\"desc\">\n        <span class=\"desc-title\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['13'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "</span>\n        <span class=\"desc-text\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['13'] : depth0)) != null ? stack1.action : stack1), depth0))
      + "</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3 col-sm-6\">\n    <div class=\"work\">\n      <div class=\"image\">\n        <a href=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['14'] : depth0)) != null ? stack1.link : stack1), depth0))
      + "\"><img src=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['14'] : depth0)) != null ? stack1.uri : stack1), depth0))
      + "\" alt=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['14'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "\"></a>\n      </div>\n      <div class=\"desc\">\n        <span class=\"desc-title\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['14'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "</span>\n        <span class=\"desc-text\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['14'] : depth0)) != null ? stack1.action : stack1), depth0))
      + "</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3 col-sm-6\">\n    <div class=\"work\">\n      <div class=\"image\">\n        <a href=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['15'] : depth0)) != null ? stack1.link : stack1), depth0))
      + "\"><img src=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['15'] : depth0)) != null ? stack1.uri : stack1), depth0))
      + "\" alt=\""
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['15'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "\"></a>\n      </div>\n      <div class=\"desc\">\n        <span class=\"desc-title\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['15'] : depth0)) != null ? stack1.title : stack1), depth0))
      + "</span>\n        <span class=\"desc-text\">"
      + alias2(alias1(((stack1 = (depth0 != null ? depth0['15'] : depth0)) != null ? stack1.action : stack1), depth0))
      + "</span>\n      </div>\n    </div>\n  </div>\n</div>";
  },"useData":true});
})();