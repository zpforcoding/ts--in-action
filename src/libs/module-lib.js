const version = '1.0.0'

function doSomething() {}

function moduleLib(options) {
  console.log(options)
}

moduleLib.version = version
moduleLib.doSomething = doSomething

module.exports = moduleLib
