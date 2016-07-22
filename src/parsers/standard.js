export default {
  name: 'standardParser',
  test (output) {
    return true
  },

  parse (failedSpecs, output) {
    let match = null
    let FAILED_LINES = /at (?:\[object Object\]|Object)\.<anonymous> \((([A-Za-z]:\\)?.*?):.*\)/g
    while (match = FAILED_LINES.exec(output)) { // eslint-disable-line no-cond-assign
      // windows output includes stack traces from
      // webdriver so we filter those out here
      if (!/node_modules/.test(match[1])) {
        failedSpecs.add(match[1])
      }
    }

    return [...failedSpecs]
  }
}