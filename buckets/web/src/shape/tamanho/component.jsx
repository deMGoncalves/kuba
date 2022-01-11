import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'

export default (tamanho) =>
  <>
    <text.Dt master dark xxxs medium>Tamanho</text.Dt>
    <text.Dd master xxs>{tamanho.valor}</text.Dd>
  </>
