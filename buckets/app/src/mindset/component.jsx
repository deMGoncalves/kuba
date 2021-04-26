import h, { Fragment } from '@kuba/h'
import Header from '@kuba/header'
import Site from '@kuba/site'
import Story from '@kuba/story'
import text from '@kuba/text'
import style from './style.css'

export default () =>
  <Site className={style.mindset}>
    <Header className={style.mindset__header} slot='header' />
    <Fragment slot='main'>
      <Story className={style.mindset__story}>
        <text.H1 className={style.mindset__h1} master darker larger>Mindset</text.H1>
      </Story>
    </Fragment>
  </Site>
