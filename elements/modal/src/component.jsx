import h, { Fragment } from '@kuba/h'
import style from './style'

export default (props, children) =>
  <>
    <div className={style.modal__overlayer} opened={props.opened} onClick={props.onClose}>
      <aside className={[style.modal, props.className]} onClick:stop={() => null}>
        {children}
      </aside>
    </div>
  </>
