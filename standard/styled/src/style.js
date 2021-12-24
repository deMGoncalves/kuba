import esModules from './esModules'
import interpolate from './interpolate'
import minify from './minify'
import render from './render'

export default function (strings, ...funcs) {
  const [mapper, textContent] = esModules(minify(interpolate(strings, funcs)))
  render(textContent)
  return mapper
}