import './style'
import container from '@kuba/container'
import h from '@kuba/h'

function component (props, children) {
  return (
    <main {...props} className={['main', props.className]}>
      <container.Div className='main__container'>{children}</container.Div>
    </main>
  )
}

export default component
