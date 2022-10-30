const { DateTime } = require("luxon")

const getDisplay = (display, diff) => {
  const parts = []
  const split = diff.toFormat('d:h:m:s:SSS').split(':')
  const days = split[0]
  const hours = split[1]
  const minutes = split[2]
  const seconds = split[3]
  const mSeconds = split[4]
  if (days !== '0') parts.push(`${days} ${display.days}`)
  if (hours !== '0' || parts.length === 1) parts.push(`${hours} ${display.hours}`)
  if (minutes !== '0' || parts.length === 2) parts.push(`${minutes} ${display.minutes}`)
  if (seconds !== '0' || parts.length === 3) parts.push(`${seconds}.${mSeconds} ${display.seconds}`)
  return parts.join(', ')
}

const short = {
  days: 'd',
  hours: 'hr',
  minutes: 'min',
  seconds: 'secs',
}

const long = {
  days: 'days',
  hours: 'hours',
  minutes: 'minuets',
  seconds: 'seconds',
}

class Stopwatch {
  constructor(unitDisplay = 'short') {
    if (!['short', 'long'].includes(unitDisplay)) throw Error('unitDisplay must be either "short" or "long"')
    this.time = null
    if(unitDisplay === 'short') this.display = short
    if(unitDisplay === 'long') this.display = long
  }
  start() {
    this.time = DateTime.now()
    delete this.diff
    delete this.msg
  }
  stop() {
    this.end = DateTime.now()
    const {display, time, end} = this
    this.diff = end.diff(time)
    this.msg = getDisplay(display, this.diff)
    return this.msg
  }
}

module.exports = Stopwatch
