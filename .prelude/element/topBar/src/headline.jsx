import './style'
import h from '@kuba/h'

function component (_props, children) {
  return (
    <div className='topBar__headline' slot='headline'>{children}</div>
  )
}

export default component
