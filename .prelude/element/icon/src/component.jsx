import h from '@kuba/h'

function component (props, children) {
  return (
    <span {...props} className={['material-symbols-rounded', props.className]}>{children}</span>
  )
}

export default component
