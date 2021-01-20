import h from '@rex/htmlparser'
import icon from '@rex/icon'
import style from './style.css'

export default (props, children) =>
  <section className={[style.drops, props.className]}>
    {children.subtitle}
    {children.title}
    <icon.ArrowLeft className={style.drops__arrowLeft} slot='icon' />
  </section>
