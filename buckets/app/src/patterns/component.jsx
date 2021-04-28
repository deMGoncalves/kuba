import h, { Fragment } from '@kuba/h'
import Site from '@kuba/site'
import Story from '@kuba/story'
import text from '@kuba/text'
import style from './style.css'

export default () =>
  <Site className={style.guidelines}>
    <Fragment slot='main'>
      <Story className={style.guidelines__story}>
        <text.H1 className={style.guidelines__h1} master darker larger>Patterns</text.H1>
      </Story>
    </Fragment>
  </Site>
