import h, { Fragment } from '@kuba/h'
import style from './style'

export default (sidebar) =>
  <>
    <aside className={style.sidebar} onMouseenter={() => sidebar.open()} onMouseleave={() => sidebar.close()} opened:isTruthy={sidebar.opened}>
      <header className={style.sidebar__header} />
    </aside>
    <div className={style.sidebar__div} onClick={() => sidebar.close()} opened:isTruthy={sidebar.opened} />
  </>
