import * as f from '@kuba/f'
import hook from '@kuba/hook'

const paint = (attributes) =>
  f.assign(attributes, {
    [f.magic('paint')]: (element) =>
      f.forEach(attributes.list, ({ key, value }) => value && element.setAttribute(key, value))
  })

export default hook(paint)
