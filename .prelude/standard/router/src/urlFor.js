function urlFor (page, params) {
  return urlFor.__urls__[page]?.replace?.(/:(?<key>\w+)/g, (_match, key) => params?.[key])
}

Object.assign(urlFor, {
  __urls__: {},

  push (url, functionRef) {
    Reflect.set(this.__urls__, functionRef.name, url)
    return this
  }
})

export default urlFor
