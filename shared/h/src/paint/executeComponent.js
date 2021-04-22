import * as f from '@kuba/f'

export default function (componentRef, entity, children) {
  const element = componentRef(entity, children)

  f.assign(entity, {
    [f.magic('element')]: element,
    [f.magic('reflow')]: f.frame(() =>
      element.reflow(componentRef(entity, children)))
  })

  return element
}
