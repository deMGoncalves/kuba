import h from '@kuba/h'
import magic from '@kuba/magic'

function component (title) {
  return (
    <title>{title[component.content]()}</title>
  )
}

Object.assign(component, {
  content: magic.component_content
})

export default component
