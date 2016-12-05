var TIMES_TO_FLAKE = process.env.TIMES_TO_FLAKE || 3

describe('a flakey integration test', function () {
  it('fails, in a horribly consistent manner', function () {
    browser.get(`/`)
    expect($('body').getText()).toContain('travis.yml')
  })
})
