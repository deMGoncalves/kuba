import h from '@h'
import style from './style.css'

export default (attr, child) =>
  <div className={[style.container, attr.className]}>
    { child }
  </div>
