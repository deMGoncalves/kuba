import h from '@rex/h'
import style from './style.css'

export default (props) =>
  <span className={[style.gradient, props.className]}>gradient</span>
