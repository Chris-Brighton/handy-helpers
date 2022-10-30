const HOUR = 3600000
const MINUET = 60000
const SECOND = 1000

class In {
  static hours(time) {
    return { run(callback) { setTimeout(()=>{ callback() }, time * HOUR) } }
  }
  static minuets(time) {
    return { run(callback) { setTimeout(()=>{ callback() }, time * MINUET) } }
  }
  static seconds(time) {
    console.log(this.t)
    return { run(callback) { setTimeout(()=>{ callback() }, time * SECOND) } }
  }
  static milliseconds(time) {
    return { run(callback) { setTimeout(()=>{ callback() }, time ) } }
  }
}

module.exports = In