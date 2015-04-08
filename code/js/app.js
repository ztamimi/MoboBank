require.config({
    baseUrl: 'js',
    
    paths: {
        "firebase": "http://cdn.firebase.com/js/client/2.2.2/firebase",
        "jquery": "http://code.jquery.com/jquery-1.11.1.min",
        "jqueryMobile": "http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min"
    }
});

requirejs(["jquery"]);
requirejs(["jqueryMobile"]);

/*
require(['modules/signup'], function(signup) {
    //backend.init();
    signup.init();
    signup.createUser('zakiya.tamimi@gmail.com');
});
*/

require(['modules/uiSignup'], function(uiSignup) {
    uiSignup.init();
});