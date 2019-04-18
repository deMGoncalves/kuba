export default (target) =>
  (...args) =>
    target(...args.reverse())
