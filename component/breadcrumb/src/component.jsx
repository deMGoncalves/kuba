import './style'
import container from '@kuba/container'
import h from '@kuba/h'
import Metro from '@kuba/metro'

function component (breadcrumb) {
  return (
    <section>
      <container.Nav>
        <Metro>
          {breadcrumb.paths}
        </Metro>
      </container.Nav>
    </section>
  )
}

export default component
