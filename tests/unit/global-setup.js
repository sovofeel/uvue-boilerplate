const app = require('express')()

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  next()
})

require('../mock-api')(app)

module.exports = () => {
  return new Promise(resolve => {
    global.mockApiServer = app.listen(process.env.MOCK_API_PORT, resolve)
  })
}
