import './style'
import h from '@kuba/h'

function component (_props, children) {
  return (
    <div className='topBar__trailing' slot='trailing'>{children}</div>
  )
}

export default component
