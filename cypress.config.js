module.exports = {
  video: true,
  screenshotOnRunFailure: true,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:5000',
  },
}
