import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import Show from '@kuba/show'

function component (lazy) {
  return (
    <>
      <Show when={lazy.ast}>{lazy.ast}</Show>
      <Hide when={lazy.ast}><div /></Hide>
    </>
  )
}

export default component
