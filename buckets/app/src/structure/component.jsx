import h, { Fragment } from '@kuba/h'
import Nav from '@kuba/nav'
import Site from '@kuba/site'
import Story from '@kuba/story'
import text from '@kuba/text'
import style from './style.css'

export default (structure) =>
  <Site className={style.structure}>
    <Nav className={style.structure__nav} slot='header' />
    <Fragment slot='main'>
      <Story className={style.structure__story}>
        <text.H1 className={style.structure__h1} master darker larger>{structure.title}</text.H1>
        <text.P className={style.structure__p} master medium>{structure.description}</text.P>
      </Story>
    </Fragment>
  </Site>
