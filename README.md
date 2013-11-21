## A super simple backbone app with browserify and jQuery

* Build browserify with `npm run build`.
* Note that we:
    * Use `jquery-browserify`
    * Must set `Backbone.$ = require('jquery-browserify');` so backbone uses jquery

The above two extra things are mostly due to the fact that backbone expects to find $ on window.
