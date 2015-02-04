define('models/user', ['backbone'], function (Backbone) {
    return Backbone.Model.extend({
        name: null,
        password: null
    })
});