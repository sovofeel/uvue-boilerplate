// Shut down the mock API once all the tests are complete.

module.exports = () => {
  return new Promise(resolve => {
    global.mockApiServer.close(resolve)
  })
}
