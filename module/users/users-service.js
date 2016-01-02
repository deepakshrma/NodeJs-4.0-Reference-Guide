var UserList = require("./Users");
var users = new UserList();
exports.save = function test(a) {
    var emitter = this;
    users.on("saved-user", function (user) {
        setTimeout(function () {
            emitter.emit('saved-user',user);
        }, 100)
    });
    users.save(a);
}.emitter();

console.log();