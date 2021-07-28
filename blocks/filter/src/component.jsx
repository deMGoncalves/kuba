import h, { Hide } from '@kuba/h'
import ambient from '@kuba/ambient'
import link from '@kuba/link'
import Metro from '@kuba/metro'
import Story from '@kuba/story'
import style from './style'

export default (filter) =>
  <ambient.Dev>
    <Story className={style.filter}>
      <Metro className={style.filter__metro}>
        {filter.selects}
        <Hide if={filter.pristine}>
          <link.Master className={style.filter__link} onClick={() => filter.rewind()} darker small>Limpar filtro</link.Master>
        </Hide>
      </Metro>
    </Story>
  </ambient.Dev>
