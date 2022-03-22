import h from '@kuba/h'
import style from './style'
import text from '@kuba/text'

export default (props, children) =>
  <div className={style.input__div} oncolor={props.onColor}>
    <text.Label className={style.input__text} master dark xxxs medium>{children.label}</text.Label>
    <input className={style.input} name={props.name} type={props.type} />
  </div>
