function params (url) {
  const keys = url.split('/')
  const values = location.pathname.split('/')
  keys.forEach((key, i) => /^:/.test(key) && Reflect.set(params, key.slice(1), values[i]))
}

export default params
