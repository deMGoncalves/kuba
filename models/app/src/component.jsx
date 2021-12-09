import h, { Fragment } from '@kuba/h'
import Header from '@kuba/header'
import Sidebar from '@kuba/sidebar'
import style from './style'

export default (app, children) =>
  <>
    <aside className={style.app__aside}>
      <Sidebar />
    </aside>
    <main className={style.app__main}>
      <Header fluid />
      {children}
    </main>
  </>
