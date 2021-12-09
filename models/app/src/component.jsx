import h, { Fragment } from '@kuba/h'
import Header from '@kuba/header'
import style from './style'

export default (app, children) =>
  <>
    <aside className={style.app__aside} />
    <main className={style.app__main}>
      <Header />
      {children}
    </main>
  </>
