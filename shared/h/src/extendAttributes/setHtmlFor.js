import frame from '@rex/h/src/frame'

export default (element) =>
  (_, id) =>
    frame(() => element.setAttribute('for', id))
