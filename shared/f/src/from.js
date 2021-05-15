export default (value) => (
  {
    done: () => value,

    pipe (functor) {
      value = functor(value)
      return this
    }
  }
)
