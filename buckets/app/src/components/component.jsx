import h, { Fragment } from '@kuba/h'
import Nav from '@kuba/nav'
import Site from '@kuba/site'
import Story from '@kuba/story'
import text from '@kuba/text'
import style from './style.css'

export default () =>
  <Site className={style.components}>
    <Nav className={style.components__nav} slot='header' />
    <Fragment slot='main'>
      <Story className={style.components__story}>
        <text.H1 className={style.components__h1} master darker larger>Components</text.H1>
      </Story>
    </Fragment>
  </Site>
