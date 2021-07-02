import * as f from '@kuba/f'

export default function (componentRef, entity, children) {
  const tag = componentRef(entity, children)

  f.assign(entity, {
    [f.magic('tag')]: tag,
    [f.magic('reflow')]: f.frame(() =>
      entity[f.magic('tag')].reflow(componentRef(entity, children)))
  })

  return tag
}
