import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (props, children) =>
  <div className={style.input__div}>
    <text.Label className={style.input__text} oncolor:isTruthy={props.onColor} master dark xxxs medium>{children.label}</text.Label>
    <input className={style.input} oncolor:isTruthy={props.onColor} name={props.name} inputmode:isTruthy={props.keyboard} data-type={props.type} is='input-mask' />
  </div>
