import h from '@rex/htmlparser'
import style from './style.css'

export default (props, children) =>
  <section className={[style.drops, props.className]}>
    {children.subtitle}
    {children.title}
  </section>
