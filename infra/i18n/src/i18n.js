import lang from '@kuba/lang'

export default (target) =>
  new Proxy({}, {
    get: (_, key) => target[key][lang.value]
  })
