import h from '@rex/htmlparser'
import style from './style.css'

export default ({ icon, subtitle, title }) =>
  <section className={[style.drops, style[`drops__${icon}`]]}>
    <span className={style.drops__subtitle}>{subtitle}</span>
    <p className={style.drops__title}>{title}</p>
  </section>
