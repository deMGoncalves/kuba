import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'

export default (laminas) =>
  <>
    <text.Dt master dark xxxs medium>Laminas</text.Dt>
    <text.Dd master xxs>{laminas.valor}</text.Dd>
  </>
