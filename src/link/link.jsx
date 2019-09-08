import h from '@h'
import style from './style.css'

const component = (props, children) =>
  <a href={props.href} className={[style.link, props.className]}>{ children }</a>

export default component
