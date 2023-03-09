import './style'
import h from '@kuba/h'

function component (_props, children) {
  return (
    <nav className='tab'>{children}</nav>
  )
}

export default component
