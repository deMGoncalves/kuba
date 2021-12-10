import h, { Fragment } from '@kuba/h'
import Header from '@kuba/header'
import Sidebar from '@kuba/sidebar'
import style from './style'

export default (app, children) =>
  <>
    <Sidebar />
    <main className={style.app__main}>
      <Header fixed />
      {children}
    </main>
  </>
