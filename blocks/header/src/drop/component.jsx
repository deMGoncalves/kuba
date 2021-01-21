import h from '@rex/htmlparser'
import icon from '@rex/icon'
import style from './style.css'

export default (props, children) =>
  <section className={[style.drop, props.className]}>
    {children.icon}
    {children.subtitle}
    {children.title}
    <icon.ArrowLeft className={style.drop__arrowLeft} />
  </section>
