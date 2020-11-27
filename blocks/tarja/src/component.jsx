import h, { Zone } from '@rex/h'
import Link from '@rex/link'
import Picture from '@rex/picture'
import Text from '@rex/text'
import style from './style.css'

export default () =>
  <Zone>
    <figure className={style.tarja}>
      <Picture className={style.tarja__picture}>
        <source srcSet='/assets/beta.mobile.png' media='(max-width: 767px)' />
        <source srcSet='/assets/beta.tablet.png' media='(min-width: 768px) and (max-width: 959px)' />
        <source srcSet='/assets/beta.desktop.png' media='(min-width: 960px)' />
      </Picture>
      <figcaption className={style.tarja__figcaption}>
        <text.H3 className={style.tarja__heading} color='inverse' size='largest'>We’re in beta. Get your invite today!</text.H3>
        <Link className={style.tarja__linkButton} color='inverse' href='/' icon='arrow'>Get an invite</Link>
      </figcaption>
    </figure>
  </Zone>
