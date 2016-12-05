import server from './support/server'
import { unlink } from 'fs'
import { resolve } from 'path'
import { spawn } from 'child_process'

const FLAKE_FILE = resolve(__dirname + '/../support/times-flaked')
const CONFIG_DIR = resolve(__dirname, 'support/protractor-config')

function configPath (filename) {
  return `${CONFIG_DIR}/${filename}.conf.js`
}

function spawnFlake (flakeArgs = []) {
  let proc = spawn('./bin/protractor-flake', flakeArgs)
  return proc
}

describe('Protractor Flake Executable', function () {
  it('integration: Exits successfully if test passes before max limit is reached', (done) => {
    let proc = spawnFlake(['--max-attempts', '3', '--', configPath('sharded')])
    proc.on('close', (status) => {
      expect(status).to.equal(0)
      done()
    })
  })
})
