import './style'
import h from '@kuba/h'
import Icon from '@kuba/icon'

function component (props) {
  return (
    <button {...props} className={['close', props.className]}>
      <Icon>close</Icon>
    </button>
  )
}

export default component
