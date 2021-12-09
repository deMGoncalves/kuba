import h from '@kuba/h'
import style from './style'

export default (sidebar) =>
  <aside className={style.sidebar} opened:isTruthy={sidebar.opened} onMouseover={() => sidebar.open()} onMouseleave={() => sidebar.close()}>
    <header className={style.sidebar__header} />
  </aside>
