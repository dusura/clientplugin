"use strict";


module.exports = function tools(options) {
    var seneca = this

    seneca.add('role:service,cmd:hi', list)


    function list(args, done) {

        done(null, {message: 'Hi There'})

    }
}
