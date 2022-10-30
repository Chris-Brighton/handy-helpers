const Stopwatch = require('./lib/Stopwatch')

class Timer {
  constructor(unitDisplay = 'short') {
    if (!['short', 'long'].includes(unitDisplay)) throw Error('unitDisplay must be either "short" or "long"')
    this.unitDisplay = unitDisplay
    this.stopwatches = {}
  }
  start(name) {
    if(!Object.prototype.hasOwnProperty.call(this.stopwatches, name)) {
      this.stopwatches[name] = new Stopwatch(this.unitDisplay)
    }
    this.stopwatches[name].start()
  }
  stop(name) {
    if(!Object.prototype.hasOwnProperty.call(this.stopwatches, name)) throw Error(`No Stopwatch with the name ${name}`)
    return this.stopwatches[name].stop()
  }
}

module.exports = Timer