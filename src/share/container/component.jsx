import h from '@h'
import style from './style.css'

export default (_, child) =>
  <div className={style.container}>
    { child }
  </div>
