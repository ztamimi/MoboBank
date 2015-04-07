define(['modules/backend'], function(backend) {

    var user = {};
    
    user.init = function() {
        user.uid = null;
        user.email = null;
        backend.init();
    };

    user.setUid = function(uid) {
        user.uid = uid;
    };

    user.setEmail = function(email) {
        console.log("user.setEmail called");
        user.email = email;
    };

    user.create = function(password) {
        console.log("user.create called");
        var email = user.email;
        var error = backend.ref.createUser({email: email, password: password}, user.createCallback);
        return error;
    };

    user.createCallback = function(error, userData) {
        console.log("user.createCallback called");
        if (error) {
            console.log(error.message);
        }
        else {
            user.uid = userData.uid;
            console.log("user.uid: " + user.uid);
            console.log("successfully created user " + user.email);
        }
    };

    user.sendResetEmail = function(callback) {
        var email = user.email;
        backend.ref.resetPassword({email: email}, callback);
    };

    user.changePassword = function(oldPassword, newPassword, callback) {
        var email = user.email;
        backend.ref.changePassword({email: email, oldPassword: oldPassword, newPassword: newPassword}, callback);
    };

    user.callback = function(error) {
        if (error) {
            //console.log(error.message);
            return error;
        }
    };
    
    user.msgList = [
        {code: "EMAIL_TAKEN", message: "The specified email address is in use. ", resolution: "If this is your email address, please go to login page and select 'Forgot Password', in order to reset your password"},
        {code: "INVALID_USER", message: "The specified user does not exist. ", resolution: ""},
        {code: "INVALID_EMAIL", message: "The specified email address is invalid. ", resolution: ""},
        {code: "", message: "", resolution: ""}
    ];      //error code, msg and resolution

    return user;
});