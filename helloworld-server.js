require('seneca')()
    .use('./service.js')
    .listen(10000)
