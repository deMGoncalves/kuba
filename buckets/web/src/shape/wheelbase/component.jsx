import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'

export default (wheelbase) =>
  <>
    <text.Dt master dark xxxs medium>Wheelbase</text.Dt>
    <text.Dd master xxs>{wheelbase.valor}</text.Dd>
  </>
