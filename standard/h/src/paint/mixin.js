import * as f from '@kuba/f'

export default function (component, entity, children) {
  const tag = component(entity, children)
  const reflow = f.debounce(f.frame(() => tag.reflow(component(entity, children))), 0)

  f.assign(entity, {
    [f.dunder.tag]: tag,
    [f.dunder.reflow]: reflow
  })

  tag.connect(entity)
}