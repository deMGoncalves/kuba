import * as f from '@kuba/f'
import Tag, { Fragment } from '@kuba/h/src/tag'

export default function (componentRef, entity, children) {
  const tag = componentRef(entity, children)
  const reflow = () =>
    entity[f.magic('tag')].reflow(componentRef(entity, children))

  f.assign(entity, {
    [f.magic('tag')]: tag,
    [f.magic('reflow')]: f.debounce(f.frame(reflow), 0)
  })

  f.some([Tag, Fragment], f.is(f.__, tag)) && (
    tag.connectEntity(entity)
  )

  return tag
}
