import * as f from '@kuba/f'
import hook from '@kuba/hook'

const paint = (className) =>
  f.assign(className, {
    [f.magic('paint')]: (element) =>
      (className.value && (element.className = className.value))
  })

export default hook(paint)
