import h, { Fragment } from '@kuba/h'
import style from './style.css'

export default (props, children) =>
  <>
    <aside className={[style.side, props.className]} opened={props.opened}>
      {children}
    </aside>
    <div className={style.side__overlayer} opened={props.opened} onClick={props.onClose} />
  </>
