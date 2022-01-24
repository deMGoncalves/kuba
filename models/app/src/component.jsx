import h, { Fragment } from '@kuba/h'
import Header, { Logo } from '@kuba/header'
import Sidebar, { Menu } from '@kuba/sidebar'
import style from './style'

export default (app, children) =>
  <>
    <Sidebar />
    <main className={[style.app__main, app.className]}>
      <Header fixed>
        <Menu />
        <Logo />
      </Header>
      {children}
    </main>
  </>
