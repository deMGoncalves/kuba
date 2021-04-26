import h from '@kuba/h'
import Site from '@kuba/site'
import Story from '@kuba/story'
import text from '@kuba/text'
import style from './style.css'

export default () =>
  <Site className={style.guidelines}>
    <Story className={style.guidelines__story}>
      <text.H1 className={style.guidelines__h1} master darker larger>Guidelines</text.H1>
    </Story>
  </Site>
