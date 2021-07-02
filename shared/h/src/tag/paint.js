export default (that) => (
  that.attributes.paint(),
  that.children.paint(),
  that.className.paint(),
  that.events.paint()
)
