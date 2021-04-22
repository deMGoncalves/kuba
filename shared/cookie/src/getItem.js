export default (key) =>
  document.cookie.match(`(^|;)\\s*${key}\\s*=\\s*([^;]+)`)?.pop()
