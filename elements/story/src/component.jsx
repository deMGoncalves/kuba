import h from '@kuba/h'
import style from './style'

export default (props, children) =>
  <section className={[style.story, props.className]}>
    {children}
  </section>
