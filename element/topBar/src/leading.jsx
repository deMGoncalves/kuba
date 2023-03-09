import './style'
import h from '@kuba/h'

function component (_props, children) {
  return (
    <div className='topBar__leading' slot='leading'>{children}</div>
  )
}

export default component
