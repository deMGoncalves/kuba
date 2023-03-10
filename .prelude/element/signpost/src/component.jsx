import './style'
import h from '@kuba/h'

function component (_props, children) {
  return (
    <span className='signpost material-symbols-rounded'>{children}</span>
  )
}

export default component
