'use strict';

var JOB_NUMBER = (process.env.TRAVIS_JOB_NUMBER || '')
var JOB_NAME = 'Flake' + JOB_NUMBER

console.log('SAUCE_USERNAME', process.env.SAUCE_USERNAME)
console.log('SAUCE KEY', process.env.SAUCE_ACCESS_KEY.slice(0, 3))

exports.config = {
  specs: [
    '../flakey-test.js',
    '../passing-test.js'
  ],

  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

  capabilities: {
    browserName: 'chrome',
    platform: 'OS X 10.9',
    version: 'latest',
    name: JOB_NAME,
    'tunnel-identifier': JOB_NUMBER
  },

  baseUrl: 'http://127.0.0.1:3000',

  framework: 'jasmine',

  allScriptsTimeout: 10000,

  getPageTimeout: 3000,

  jasmineNodeOpts: {
    defaultTimeoutInterval: 5000
  },

  onPrepare: function () {
    // let protractor know it doesn't need to look for angular on the page
    browser.ignoreSynchronization = true;
  }
};

