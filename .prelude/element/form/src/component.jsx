import './style'
import h from '@kuba/h'
import validity from './validity'

function component (props, children) {
  const onSubmit = (e) => (validity(e) && props.onSubmit?.(e))
  return (
    <form {...props} className={['form', props.className]} onSubmit={onSubmit} novalidate>
      {children}
    </form>
  )
}

export default component
