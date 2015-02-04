require.config({
    paths: {
        'jquery': 'libs/jquery/dist/jquery.min',
        'underscore': 'libs/underscore-amd/underscore',
        'backbone': 'libs/backbone-amd/backbone'
    }
});

require(['controllers/user'], function (AppController) {});