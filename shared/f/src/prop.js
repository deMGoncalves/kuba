export default (path, target) => {
  /* eslint no-new-func: "off" */
  try {
    return (new Function('x', `return x${/^\[/.test(path) ? '' : '.'}${path}`))(target)
  } catch {}
}
