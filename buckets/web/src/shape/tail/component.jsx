import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'

export default (tail) =>
  <>
    <text.Dt master dark xxxs medium>Tail</text.Dt>
    <text.Dd master xxs>{tail.valor}</text.Dd>
  </>
