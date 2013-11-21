var $ = require('jquery-browserify');
var Backbone = require('backbone');
Backbone.$ = $;
var View = require('./view');

var start = function () {
    var view = new View();
    $('body').append( view.render().el );
};

$(start);
