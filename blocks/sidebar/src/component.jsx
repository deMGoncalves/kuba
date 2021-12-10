import h, { Fragment } from '@kuba/h'
import Header from '@kuba/header'
import style from './style'

export default (sidebar) =>
  <>
    <aside className={style.sidebar} onMouseenter={() => sidebar.open()} onMouseleave={() => sidebar.close()} opened:isTruthy={sidebar.opened}>
      <Header className={style.sidebar__header} fixed />
    </aside>
    <div className={style.sidebar__div} onClick={() => sidebar.close()} opened:isTruthy={sidebar.opened} />
  </>
