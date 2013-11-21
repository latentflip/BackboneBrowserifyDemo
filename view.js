var Backbone = require('backbone');

var View = Backbone.View.extend({
    template: function () {
        return "<input placeholder='Your name'> <span></span>";
    },
    events: {
        'keyup input' : 'onInputKeyup'
    },
    onInputKeyup: function (e) {
        this.$('span').text( $(e.target).val() );
    },
    render: function () {
        this.$el.html( this.template() );
        return this;
    }
});

module.exports = View;
