import h from '@kuba/h'
import link from '@kuba/link'
import { urlFor } from '@kuba/router'
import style from './style.css'

export default (props) =>
  <darlings {...props} className={[style.darlings, props.className]}>
    <link.Master className={style.darlings__link} href={urlFor('home')} master small>In finibus</link.Master>
    <link.Master className={style.darlings__link} href={urlFor('home')} master small>Donec suscipit</link.Master>
    <link.Master className={style.darlings__link} href={urlFor('home')} master small>Aenean mollis</link.Master>
  </darlings>
