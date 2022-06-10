export default (target) => (
  {
    done: () => target,

    pipe (predicate) {
      target = predicate(target)
      return this
    }
  }
)
