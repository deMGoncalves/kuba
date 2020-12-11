if (window) {
  var h = require('./src/h').default
  var Fragment = require('./src/fragment').default
  var Hide = require('./src/hide').default
  var paint = require('./src/paint').default
  var render = require('./src/render').default
  var repaint = require('./src/repaint').default
  var Raw = require('./src/raw').default
  var Repeat = require('./src/repeat').default
  var Show = require('./src/show').default
  var Zone = require('./src/zone').default
} else {
  var h = console.log
}

export default h
export {
  Fragment,
  Hide,
  paint,
  render,
  repaint,
  Raw,
  Repeat,
  Show,
  Zone
}
