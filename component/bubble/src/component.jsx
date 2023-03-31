import './style'
import h from '@kuba/h'
import text from '@kuba/text'

function component (props, children) {
  return (
    <section className={['bubble', props.className]}>
      <img className='bubble__img' src={props.src} alt={props.alt ?? 'kuba'} loading='auto' />
      <text.H1 master xxxs dark medium center>{children}</text.H1>
    </section>
  )
}

export default component
