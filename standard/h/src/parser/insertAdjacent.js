import * as f from '@kuba/f'

const insertAdjacent = async (target, child) => (
  target.element.insertAdjacentElement('afterend', await child.mount())
)

export default f.frame(insertAdjacent)
