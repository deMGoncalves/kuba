import h from '@h'
import style from './style.css'

export default (attr, child) =>
  <section className={[style.module, attr.className]}>
    { child }
  </section>
