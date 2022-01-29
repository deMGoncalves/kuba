import h from '@kuba/h'
import icon from '@kuba/icon'
import link from '@kuba/link'
import style from './style'

export default (site) =>
  <link.Complete className={style.site__link} uid='site' href={site.valor} target='_blank' dark xxxs medium>
    Site oficial
    <icon.ArrowLongRight className={style.site__icon}/>
  </link.Complete>
