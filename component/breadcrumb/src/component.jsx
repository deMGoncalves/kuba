import './style'
import container from '@kuba/container'
import h from '@kuba/h'

function component (breadcrumb) {
  return (
    <container.Nav className='breadcrumb'>
      {breadcrumb.paths}
    </container.Nav>
  )
}

export default component
