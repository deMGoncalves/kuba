import * as f from '@kuba/f'

export default function (component, entity, children) {
  const tag = component(entity, children)
  const reflow = f.debounce(() => tag.update(component(entity, children)), 100)

  f.assign(entity, {
    [f.dunder.tag]: tag,
    [f.dunder.reflow]: reflow
  })

  tag.connect(entity)
}
