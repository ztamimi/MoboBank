define (['jquery', 'modules/signup'], function($, signup) {
    var uiSignup = {};
    
    uiSignup.init = function() {
        console.log("uiSignup.init called");
        uiSignup.signupBtn = $('#confirmEmailBtn');
        uiSignup.emailInput = $('#emailInput');
        uiSignup.signupBtn.on("click", uiSignup.click);
    };
    
    uiSignup.click = function() {
        //console.log("btn clicked");
        signup.init();
        signup.createUser(uiSignup.emailInput.val());
    };
    
    return uiSignup;
});