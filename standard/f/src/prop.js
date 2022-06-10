import curry from './curry'

const prop = (path, target) => {
  /* eslint no-new-func: "off" */
  try {
    return (new Function('x', `return x${/^\[/.test(path) ? '' : '.'}${path}`))(target)
  } catch (_error) {
    return undefined
  }
}

export default curry(prop)
