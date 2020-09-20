import h from '@rex/h'
import * as c from '@components'
import style from './style.css'

export default () =>
  <figure className={style.tarja}>
    <c.Picture className={style.tarja__picture}>
      <source srcSet='/assets/beta.mobile.png' media='(max-width: 767px)' />
      <source srcSet='/assets/beta.tablet.png' media='(min-width: 768px) and (max-width: 959px)' />
      <source srcSet='/assets/beta.desktop.png' media='(min-width: 960px)' />
    </c.Picture>
    <figcaption className={style.tarja__figcaption}>
      <h3 className={style.tarja__h3}>We’re in beta. Get your invite today!</h3>
      <c.LinkButton className={style.tarja__linkButton} color='inverse' href='/'>Get an invite</c.LinkButton>
    </figcaption>
  </figure>
