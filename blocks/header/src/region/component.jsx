import h from '@rex/htmlparser'
import text from '@rex/text'
import Drop from '@drop'
import style from './style.css'

export default (props) =>
  <Drop className={[style.region, props.className]}>
    <text.Span className={style.region__subtitle} slot='subtitle'>ative condições e</text.Span>
    <text.P className={style.region__title} slot='title'>ofertas da sua região</text.P>
  </Drop>
