import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'

export default (material) =>
  <>
    <text.Dt master dark xxxs medium>Material</text.Dt>
    <text.Dd master xxs>{material.valor}</text.Dd>
  </>
