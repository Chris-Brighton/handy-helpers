
module.exports = class Formatter {
  static pascalToSnake(string) {
    return string.replace(/(?:^|\.?)([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "")
  }
  static pascalToCamel(string) {
    return string.charAt(0).toLowerCase() + string.substr(1)
  }
  static snakeToPascal(string) {
    const split = string.split('-')
    const parts = []
    split.forEach(chunk => {parts.push( chunk.charAt(0).toUpperCase() + chunk.substr(1))});
    return parts.join('')
  }
  static snakeToCamel(string) {
    const split = string.split('-')
    const parts = []
    split.forEach(chunk => {parts.push( chunk.charAt(0).toUpperCase() + chunk.substr(1))});
    string = parts.join('')
    return string.charAt(0).toLowerCase() + string.substr(1)
  }
  static camelToPascal(string) {
    return string.charAt(0).toUpperCase() + string.substr(1)
  }
  static camelToSnake(string) {
    return string.replace(/(?:^|\.?)([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "")
  }
}