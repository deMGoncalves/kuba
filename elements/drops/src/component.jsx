import h from '@rex/htmlparser'
import style from './style.css'

export default ({ name, subtitle, title }) =>
  <section className={[style.drops, style[`drops__${name}`]]}>
    <p className={style.drops__title}>
      <span className={style.drops__subtitle}>{subtitle}</span>
      {title}
    </p>
  </section>
