import h from '@h'
import style from './style.css'

const component = (props, children) =>
  <h1 className={[style.title, props.className]}>{ children }</h1>

export default component
