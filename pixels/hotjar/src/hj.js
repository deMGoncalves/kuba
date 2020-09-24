window.hj = (...args) =>
  (window.hj.q = window.hj.q || []).push(args)

export default window.hj
