import frame from '@rex/h/src/frame'

export default (element) =>
  frame(() => element.remove())
