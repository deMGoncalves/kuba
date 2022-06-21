import * as f from '@kuba/f'

const createElement = f.memoize((name, is, className, attributes) => (
  new DOMParser()
    .parseFromString(
      `<${name} ${is} ${className} ${attributes} />`,
      'text/html'
    )
    .querySelector(name)
))

const mountAttributes = f.memoize((attributes) => (
  f
    .from(attributes)
    .pipe(f.map(f.__, ({ key, value }) => `${key}="${value}"`))
    .pipe(f.join(f.__, ' '))
    .done()
))

const mountClassName = f.memoize((className) => (
  className ? `class="${className}"` : ''
))

const mountIs = f.memoize((is) => (
  is ? `is="${is}"` : ''
))

f.assign(createElement, {
  exec: (element) => (
    createElement(
      element.name,
      mountIs(element.is),
      mountClassName(f.toString(element.className)),
      mountAttributes(f.toArray(element.attributes))
    )
  ),

  is: f.compose(f.equal(1), f.prop('type'))
})

export default createElement
