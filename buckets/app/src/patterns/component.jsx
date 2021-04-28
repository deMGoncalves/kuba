import h, { Fragment } from '@kuba/h'
import Nav from '@kuba/nav'
import Site from '@kuba/site'
import Story from '@kuba/story'
import text from '@kuba/text'
import style from './style.css'

export default () =>
  <Site className={style.patterns}>
    <Nav className={style.patterns__nav} slot='header' />
    <Fragment slot='main'>
      <Story className={style.patterns__story}>
        <text.H1 className={style.patterns__h1} master darker larger>Patterns</text.H1>
      </Story>
    </Fragment>
  </Site>
