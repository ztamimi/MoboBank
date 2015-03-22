
var account = {id: '', ref: ''};

account.create = function() {
    
};

account.doesExist = function(id, callback) {
    var ref = account.ref;
    ref.once('value', function(snapshot) {
        if(snapshot.hasChild(id)) 
            callback(true);
        else
            callback(false);
    });
};