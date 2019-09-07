import h from '@h'
import style from './style.css'

const component = (_, children) =>
  <div className={style.container}>{ children }</div>

export default component
