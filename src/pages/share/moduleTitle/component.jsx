import h from '@h'
import style from './style.css'

export default (attr, child) =>
  <h2 className={[style.title, attr.className]}>{ child }</h2>
