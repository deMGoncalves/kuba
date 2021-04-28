import h, { Fragment } from '@kuba/h'
import Nav from '@kuba/nav'
import Site from '@kuba/site'
import Story from '@kuba/story'
import text from '@kuba/text'
import style from './style.css'

export default () =>
  <Site className={style.mindset}>
    <Nav className={style.mindset__nav} slot='header' />
    <Fragment slot='main'>
      <Story className={style.mindset__story}>
        <text.H1 className={style.mindset__h1} master darker larger>Mindset</text.H1>
      </Story>
    </Fragment>
  </Site>
