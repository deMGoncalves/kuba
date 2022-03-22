import h from '@kuba/h'
import style from './style'
import text from '@kuba/text'

export default (props, children) =>
  <div uid={props.id} className={style.control} oncolor={props.onColor}>
    <text.Label className={style.control__label} htmlFor={props.name} master dark xxxs medium>{children.label}</text.Label>
    <input className={style.control__input} name={props.name} type={props.type} />
  </div>
