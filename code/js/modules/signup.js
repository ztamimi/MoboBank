define (['modules/user', 'modules/password', 'modules/email'], function(user, password, email) {

    var signup = {};
    
    signup.init = function() {
        user.init();
    };

    signup.callback = function(error) {
        if (error)
            console.log(error.message);
        else
            console.log("success");
    };
    
    signup.createUser = function(emailAddress) {
        console.log('sign up called');
        
        if (email.validate(emailAddress)) {
            console.log("valid email address");
            user.setEmail(emailAddress);
        }
        else {
            console.log("invalid email address: " + user.email);
            return;
        }
        
        var randomPassword = password.generateRandom();
        console.log("random password generated: " + randomPassword);
        
        user.create(randomPassword);
        
        //user.sendResetEmail(user.callback);
        
        
        //user.changePassword(oldPassword, newPassword, user.callback);
    };
    
    return signup;
});