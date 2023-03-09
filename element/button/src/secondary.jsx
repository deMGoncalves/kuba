import './style'
import h from '@kuba/h'

function component (props, children) {
  return (
    <button {...props} className={['button', 'secondary', props.className]}>
      {children}
    </button>
  )
}

export default component
