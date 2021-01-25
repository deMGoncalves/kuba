import h from '@rex/htmlparser'
import Drop from '@header/drop'
import style from './style.css'

import icon from '@rex/icon'
import text from '@rex/text'

export default (region) =>
  <Drop className={[style.region, region.className]}>
    <icon.Location className={style.region__icon} largest slot='icon' />
    <text.Span className={style.region__subtitle} slot='subtitle' small info>ative condições e</text.Span>
    <text.P className={style.region__title} slot='title' small>ofertas da sua região</text.P>
  </Drop>
