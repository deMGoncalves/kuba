import h from '@kuba/h'
import container from '@kuba/container'
import Logo from '@kuba/logo'
import style from './style'

export default (props) =>
  <header className={[style.header, props.className]}>
    <container.Nav className={style.header__container}>
      <Logo />
    </container.Nav>
  </header>
