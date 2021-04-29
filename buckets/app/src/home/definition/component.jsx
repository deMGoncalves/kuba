import h from '@kuba/h'
import text from '@kuba/text'
import style from './style.css'

export default (props) =>
  <text.Blockquote className={[style.definition, props.className]} master largest>
    <text.Strong master largest>Kuba</text.Strong> é como uma folha em branco! A liberdade de programar do jeito que faça sentido para o produto
    <br />
    <text.Cite className={style.definition__cite} master darker small>- deMGoncalves</text.Cite>
  </text.Blockquote>
