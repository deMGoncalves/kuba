import * as f from '@kuba/f'

const replaceChild = (target, child) => (
  new Promise(f.frame(async (resolve) => (
    target.element.parentNode.replaceChild(await child.mount(), target.element),
    resolve()
  )))
)

export default replaceChild
