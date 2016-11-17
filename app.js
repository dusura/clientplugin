"use strict";


module.exports = function tools(options) {
    var seneca = this

    seneca.add('role:tools,cmd:list', list)


    function list(args, done) {

        done(null, ['Looking Glass'])

    }
}
