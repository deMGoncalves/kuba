import h, { Fragment } from '@kuba/h'
import style from './style'

export default (props, children) =>
  <>
    <aside className={[style.select, props.className]} opened:isTruthy={props.opened}>
      {children}
    </aside>
    <div className={style.select__overlayer} onClick={props.onClose} opened:isTruthy={props.opened} />
  </>
