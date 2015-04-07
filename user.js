
var user = {uid: '', email: '', ref: ''};

user.setUid = function(uid) {
    user.uid = uid;
};

user.setEmail = function(email) {
    user.email = email;
};

user.setRef = function(ref) {
    user.ref = ref;
};



user.create = function(password, callback) {
    var ref = user.ref;
    var email = user.email;
    ref.createUser({email: email, password: password}, callback);
};

user.createCallback = function(error, userData) {
    if (error) {
        console.log(error.message);
    }
    else {
        user.uid = userData.uid;
        console.log("success");
    }
};

user.sendResetEmail = function(callback) {
    var ref = user.ref;
    var email = user.email;
    ref.resetPassword({email: email}, callback);
};

user.changePassword = function(oldPassword, newPassword, callback) {
    var ref = user.ref;
    var email = user.email;
    ref.changePassword({email: email, oldPassword: oldPassword, newPassword: newPassword}, callback);
};

user.msgList = [
    {code: "EMAIL_TAKEN", message: "The specified email address is in use. ", resolution: "If this is your email address, please go to login page and select 'Forgot Password', in order to reset your password"},
    {code: "INVALID_USER", message: "The specified user does not exist. ", resolution: ""},
    {code: "INVALID_EMAIL", message: "The specified email address is invalid. ", resolution: ""},
    {code: "", message: "", resolution: ""}
];      //error code, msg and resolution