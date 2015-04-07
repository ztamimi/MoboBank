require.config({
    baseUrl: 'js',
    
    paths: {
        "firebase": "http://cdn.firebase.com/js/client/2.2.2/firebase"
    }
});

require(['modules/signup'], function(signup) {
    //backend.init();
    signup.init();
    signup.createUser('zakiya.tamimi@gmail.com');
});