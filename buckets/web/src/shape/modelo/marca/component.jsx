import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'

export default (marca) =>
  <Fragment uid='marca'>
    <text.Strong master darker xxxs medium>{marca.valor}</text.Strong>
  </Fragment>
