(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['social'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

    return "<div class=\"col-md-3 col-sm-6\">\n  <div class=\"work\">\n    <div class=\"image\">\n      <a href=\""
      + alias3(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"link","hash":{},"data":data}) : helper)))
      + "\"><img alt=\""
      + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
      + "\" src=\""
      + alias3(((helper = (helper = helpers.uri || (depth0 != null ? depth0.uri : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"uri","hash":{},"data":data}) : helper)))
      + "\"></a>\n    </div>\n  </div>\n  <div class=\"service\">\n    <div class=\"icon bg-silver\"><i class=\"fa fa-"
      + alias3(((helper = (helper = helpers.platform || (depth0 != null ? depth0.platform : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"platform","hash":{},"data":data}) : helper)))
      + " fa-1\"></i></div>\n    <div class=\"info\">\n      <p class=\"desc\">"
      + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
      + "</p>\n    </div>\n  </div>\n  <br/>\n</div>";
  },"useData":true});
})();