define('controllers/user', [
    'backbone',
    'models/user',
    'views/app'
], function (Backbone, User, AppView) {
    var user = new User();
    user.set({name: 'valera', password: 'valera'});
    console.log(user.get('name'));
});