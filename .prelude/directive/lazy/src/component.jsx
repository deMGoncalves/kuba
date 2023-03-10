import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import magic from '@kuba/magic'
import Show from '@kuba/show'

function component (lazy) {
  return (
    <>
      <Show when={lazy[component.ast]()}>{lazy[component.ast]()}</Show>
      <Hide when={lazy[component.ast]()}><div /></Hide>
    </>
  )
}

Object.assign(component, {
  ast: magic.component_ast
})

export default component
