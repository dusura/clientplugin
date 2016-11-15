require('seneca')()
  .repl(43002)
  .use('./app.js')
  .listen(process.env.TOOLS_SERVICE_PORT || process.env.tools_PORT)
