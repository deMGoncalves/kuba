import h, { Fragment } from '@kuba/h'
import Header from '@kuba/header'
import Nav from './nav'
import Overlayer from './overlayer'
import style from './style'

export default (sidebar) =>
  <>
    <aside className={style.sidebar} opened:isTruthy={sidebar.opened}>
      <Header className={style.sidebar__header} fixed />
      <Nav />
    </aside>
    <Overlayer onClick={() => sidebar.close()} opened:isTruthy={sidebar.opened} />
  </>
