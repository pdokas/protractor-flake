'use strict';

var JOB_NAME = 'Flake' + (process.env.TRAVIS_JOB_NUMBER || '');

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
    name: JOB_NAME
  },

  baseUrl: 'http://localhost:3000/',

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

