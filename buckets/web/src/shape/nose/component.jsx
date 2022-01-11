import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'

export default (nose) =>
  <>
    <text.Dt master dark xxxs medium>Nose</text.Dt>
    <text.Dd master xxs>{nose.valor}</text.Dd>
  </>
