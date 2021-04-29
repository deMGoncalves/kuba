import h, { Fragment } from '@kuba/h'
import Nav from '@kuba/nav'
import Site from '@kuba/site'
import Story from '@kuba/story'
import Summary from '@kuba/summary'
import text from '@kuba/text'
import style from './style.css'

export default (patterns) =>
  <Site className={style.patterns}>
    <Nav className={style.patterns__nav} slot='header' />
    <Fragment slot='main'>
      <Story className={style.patterns__story}>
        <text.H1 className={style.patterns__h1} master darker larger>{patterns.title}</text.H1>
        <text.P className={style.patterns__p} master small>{patterns.description}</text.P>
      </Story>
      <Story className={style.patterns__story}>
        <Summary className={style.patterns__summary} iterator={patterns.summary} />
      </Story>
    </Fragment>
  </Site>
