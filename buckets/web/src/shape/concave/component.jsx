import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'

export default (concave) =>
  <>
    <text.Dt master dark xxxs medium>Concave</text.Dt>
    <text.Dd master xxs>{concave.valor}</text.Dd>
  </>
