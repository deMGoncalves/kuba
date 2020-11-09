import * as f from '@rex/f'

const replaceComponent = (element, vElement, parent) =>
  parent.replaceChild(vElement[f.magic('h/target')][f.magic('h/element')], element)

export default f.frame(replaceComponent)
