import * as f from '@kuba/f'

const appendChild = async (parent, child) => (
  parent.element.appendChild(await child.mount())
)

export default f.frame(appendChild)
