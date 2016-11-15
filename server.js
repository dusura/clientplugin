require('seneca')()
  .repl(43002)
  .use('./app.js')
  .listen(process.env.SERVICE_PORT)
