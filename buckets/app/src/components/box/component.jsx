import h, { Fragment } from '@kuba/h'
import Nav from '@kuba/nav'
import Site from '@kuba/site'
import Story from '@kuba/story'
import text from '@kuba/text'
import style from './style.css'

export default (box) =>
  <Site className={style.box}>
    <Nav className={style.box__nav} slot='header' />
    <Fragment slot='main'>
      <Story className={style.box__story}>
        <text.H1 className={style.box__h1} master darker larger>{box.title}</text.H1>
        <text.P className={style.box__p} master small>{box.description}</text.P>
      </Story>
    </Fragment>
  </Site>
