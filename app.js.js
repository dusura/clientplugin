require('seneca')()
    .client({pin: 'role:service', host: 'localhost', port: '10000'})
    .act('role:service,cmd:hi', console.log);