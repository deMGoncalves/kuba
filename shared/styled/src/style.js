import contents from './contents'
import esModules from './esModules'
import interpolate from './interpolate'
import minify from './minify'
import render from './render'

export default function (strings, ...funcs) {
  const [mapper, text] = esModules(minify(interpolate(strings, funcs)))
  contents.push(text)
  render()
  return mapper
}
