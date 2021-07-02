export default (value) => (
  {
    done: () => value,

    pipe (func) {
      value = func(value)
      return this
    }
  }
)
