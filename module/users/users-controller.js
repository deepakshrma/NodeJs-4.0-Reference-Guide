var UserService = require('./users-service');
exports.save = function (user, callback) {
    UserService.save(user).on('saved-user', function (user) {
        console.info('saved-user::', user)
    })
    //console.info(UserService.save);

}