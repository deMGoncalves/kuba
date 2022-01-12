import h, { Fragment } from '@kuba/h'
import style from './style'

export default (props, children) =>
  <>
    <aside className={[style.side, props.className]} opened:isTruthy={props.opened}>
      {children}
    </aside>
    <div className={style.side__overlayer} opened:isTruthy={props.opened} onClick={props.onClose} />
  </>
