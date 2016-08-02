exports.config = {
  directConnect: true,
  capabilities: {
    'browserName': 'firefox'
  },
  framework: 'jasmine',
  specs: ['src/tests/UI/*.js'],
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
