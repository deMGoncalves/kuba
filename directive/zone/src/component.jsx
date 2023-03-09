import './style'
import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import magic from '@kuba/magic'
import Show from '@kuba/show'

function component (zone, children) {
  return (
    <>
      <Show when={zone[component.onView]()}>{children}</Show>
      <Hide when={zone[component.onView]()}>
        <div className={['zone', zone.className]} />
      </Hide>
    </>
  )
}

Object.assign(component, {
  onView: magic.component_onView
})

export default component
