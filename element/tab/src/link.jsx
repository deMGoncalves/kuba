import './style'
import h from '@kuba/h'

function component (props, children) {
  return (
    <a {...props} className={['tab__link', props.className]}>{children}</a>
  )
}

export default component
