import h from '@kuba/h'
import icon from '@kuba/icon'
import link from '@kuba/link'
import style from './style'

export default () =>
  <nav className={style.nav}>
    <link.Master className={style.nav__a} lightest>
      Home
      <icon.Close onColor />
    </link.Master>
    <link.Master className={style.nav__a} lightest>
      About
      <icon.Close onColor />
    </link.Master>
  </nav>
