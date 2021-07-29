export default () =>
  Object.create({
    append () {},
    removeAttribute () {},
    render () {
      self.postMessage(this)
    }
  })
