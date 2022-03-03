import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (descricao) =>
  <>
    <text.P className={style.descricao} master xxxs>{descricao.master}</text.P>
    <text.P className={[style.descricao, style.slave]} master xxxs>{descricao.slave}</text.P>
  </>
