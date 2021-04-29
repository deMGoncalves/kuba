import h, { Fragment } from '@kuba/h'
import Nav from '@kuba/nav'
import Site from '@kuba/site'
import Story from '@kuba/story'
import Summary from '@kuba/summary'
import text from '@kuba/text'
import style from './style.css'

export default (structure) =>
  <Site className={style.structure}>
    <Nav className={style.structure__nav} slot='header' />
    <Fragment slot='main'>
      <Story className={style.structure__story}>
        <text.H1 className={style.structure__h1} master darker larger>{structure.title}</text.H1>
        <text.P className={style.structure__p} master small>{structure.description}</text.P>
      </Story>
      <Story className={style.structure__story}>
        <Summary className={style.structure__summary} iterator={structure.summary} />
      </Story>
    </Fragment>
  </Site>
