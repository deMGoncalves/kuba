import './style'
import h from '@kuba/h'
import Icon from '@kuba/icon'

function component (props, children) {
  return (
    <Icon {...props} className='input__trailing' slot='trailing'>{children}</Icon>
  )
}

export default component
