import h from '@kuba/h'
import link from '@kuba/link'
import { urlFor } from '@kuba/router'
import style from './style'

export default (departament) =>
  <link.Master className={style.nav__departament} href={urlFor('departament', { departament: departament.link_rewrite })}>{departament.name}</link.Master>
