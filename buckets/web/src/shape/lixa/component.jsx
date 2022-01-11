import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'

export default (lixa) =>
  <>
    <text.Dt master dark xxxs medium>Lixa</text.Dt>
    <text.Dd master xxs>{lixa.valor}</text.Dd>
  </>
