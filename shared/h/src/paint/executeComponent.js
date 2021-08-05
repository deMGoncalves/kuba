import * as f from '@kuba/f'

export default function (componentRef, entity, children) {
  const tag = componentRef(entity, children)

  const reflow = f.debounce(f.frame(() =>
    entity[f.magic('tag')].reflow(componentRef(entity, children))), 0)

  f.assign(entity, {
    [f.magic('tag')]: tag,
    [f.magic('reflow')]: reflow
  })

  return tag
}
