define('views/app',['backbone'], function (Backbone) {
    var View = Backbone.View.extend({
        initialize: function () {
            document.write('Hello Geekhub!');
        }
    });

    return View;
});