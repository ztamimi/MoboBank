
define(['firebase'], function() {
    
    var backend = {};
        
    backend.url = 'https://blazing-heat-3187.firebaseio.com/';
        
    backend.init = function () {
        console.log("backend.init");
        backend.ref = new Firebase(backend.url);
    };
    
    return backend;
    /*    
    var backend = {};
    
    backend.url = 'https://blazing-heat-3187.firebaseio.com/';
    
    backend.init = function () {
        console.log("backend.init");
        
        backend.ref = new Firebase(backend.url);
    };
    return backend;
    */
});
