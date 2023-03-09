import h from '@kuba/h'
import magic from '@kuba/magic'

function component (description) {
  return (
    <meta name='description' content={description[component.content]()} />
  )
}

Object.assign(component, {
  content: magic.component_content
})

export default component
