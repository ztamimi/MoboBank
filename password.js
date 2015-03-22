
var password = {rules: ''};

password.validateStrength = function(pass) {      //checks password against rules
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    return re.test(pass);
};

password.generateRandom = function() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = 6;
    var randstr = '';
    for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randstr += chars.substring(rnum,rnum+1);
    }
    return randstr;
};