import * as f from '@kuba/f'
import hook from '@kuba/hook'

const magic = f.magic('paint')
const paint = (children) =>
  f.assign(children, {
    [magic]: (element) =>
      f.forEach(children.list, (child) => element.append(child[magic]()))
  })

export default hook(paint)
