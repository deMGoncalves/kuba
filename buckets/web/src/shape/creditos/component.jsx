import h from '@kuba/h'
import link from '@kuba/link'
import style from './style'

export default (creditos) =>
  <link.Complete className={style.creditos} href={creditos.url} target='_blank' xxxs>{creditos.marca}</link.Complete>
