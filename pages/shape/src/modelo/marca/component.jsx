import h, { Fragment } from '@kuba/h'
import style from './style'
import text from '@kuba/text'

export default (marca) =>
  <Fragment uid='marca'>
    <text.A className={style.marca} href={marca.href} master darker xxxs medium>{marca.nome}</text.A>
  </Fragment>
